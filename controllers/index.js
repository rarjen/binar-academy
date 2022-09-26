const { User } = require("../db/models");
const bcrypt = require("bcrypt");
module.exports = {
  findOne: async (req, res, next) => {
    try {
      const where = {};
      const { id, email } = req.body;
      if (id) {
        where.id = id;
      }
      if (email) {
        where.email = email;
      }
      const user = await User.findOne({ where });
      if (!user) {
        return res.status(400).json({
          status: false,
          message: "User Not Found!",
          data: null,
        });
      }

      return res.status(201).json({
        status: true,
        message: "Success",
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;

      const exist = await User.findOne({ where: email });
      if (exist) {
        return res.status(400).json({
          status: false,
          message: "User Already Taken",
          data: null,
        });
      }

      const encrypted = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        password: encrypted,
      });

      return res.status(201).json({
        status: true,
        message: "Success",
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      next(error);
    }
  },
};
