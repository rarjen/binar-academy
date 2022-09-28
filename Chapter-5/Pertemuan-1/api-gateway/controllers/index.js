const adapter = require("../external/apiadapter");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { USER_SERVICE_HOST, JWT_SECRET_KEY } = process.env;

const api = adapter(USER_SERVICE_HOST);

module.exports = {
  register: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const { data } = await api.post("/create", { name, email, password });

      return res.status(201).json({
        status: true,
        message: "Success Register!",
        data: data.data,
      });
    } catch (error) {
      if (error.code == "ECONNREFUSED") {
        error = new Error("Service Unavailable");
        return next(error);
      }
      if (error.response) {
        const { status, data } = error.response;
        res.status(status).json(data);
      }
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const { data } = await api.post("/find", { email });

      const user = data.data;
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return res.status(401).json({
          status: false,
          message: "Wrong Email/Password",
          data: null,
        });
      }

      const token = jwt.sign(user, JWT_SECRET_KEY);
      return res.status(200).json({
        status: true,
        message: "Success Login",
        data: { token },
      });
    } catch (error) {
      if (error.code == "ERRCONNREFUSED") {
        error = new Error("Service Unavailable!");
        return next(error);
      }
      if (error.response) {
        const { status, data } = error.response;
        res.status(status).json(data);
      }
      next(error);
    }
  },
};
