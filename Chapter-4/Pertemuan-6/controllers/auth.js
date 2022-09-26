const { users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SIGNATURE_KEY } = process.env;

module.exports = {
  register: async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
      const existUser = await users.findOne({ where: { email: email } });
      if (existUser) {
        return res.status(400).json({
          status: false,
          message: "Email already taken",
        });
      }

      const encryptedPassword = await bcrypt.hash(password, 10);

      const user = await users.create({
        name,
        email,
        password: encryptedPassword,
      });

      return res.status(200).json({
        status: false,
        message: "success",
        data: {
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      next(err);
    }
  },
  login: async (req, res, next) => {
    try {
      /*
      - get req body (email, password)
      - cek database email ada atau tidak
      - if not => balikin error 404
      - if true => cek hashPassword
      - generate token (JWT => jsonwebtoken)
      - return token
      */

      const { email, password } = req.body;
      console.log(email);
      console.log(password);
      const user = await users.findOne({ where: { email: email } });
      if (!user) {
        return res.status(400).json({
          status: false,
          message: "email not found!",
        });
      }

      const correct = await bcrypt.compare(password, user.password);
      if (!correct) {
        return res.status(400).json({
          status: false,
          message: "email/password salah",
        });
      }

      //generate
      payload = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      const token = jwt.sign(payload, JWT_SIGNATURE_KEY);

      return res.status(200).json({
        status: false,
        message: "success",
        data: {
          // name: user.name,
          // email: user.email,
          token: token,
        },
      });
    } catch (error) {
      next(error);
    }
  },
  whoami: (req, res, next) => {
    const user = req.user;

    try {
      return res.status(200).json({
        status: false,
        message: "success",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },
  changePassword: async (req, res, next) => {
    // const user = req.users;
    try {
      const { oldPassword, newPassword, confirmPassword } = req.body;
      console.log(oldPassword);
      if (newPassword !== confirmPassword) {
        return res.status(400).json({
          status: false,
          message: "new password and confirm new password doesn't match!",
        });
      }

      const user = users.findOne({ where: { id: req.user.id } });
      if (!user)
        return res.status(404).json({
          success: false,
          message: "User not found!",
        });

      const correct = bcrypt.compare(user.password, newPassword);
      if (!correct) {
        return res.status(400).json({
          status: false,
          message: "old password doesn't match!",
        });
      }

      const encryptedPassword = bcrypt.hash(newPassword, 10);
      const updatedUser = users.update(
        {
          password: encryptedPassword,
        },
        {
          where: {
            id: user.id,
          },
        }
      );

      return res.status(200).json({
        status: false,
        message: "success",
        data: updatedUser,
      });
    } catch (error) {
      next(error);
    }
  },
};
