const jwt = require("jsonwebtoken");

const { JWT_SIGNATURE_KEY } = process.env;

module.exports = {
  mustLogin: (req, res, next) => {
    try {
      const token = req.headers["authorization"];
      if (!token) {
        return res.status(401).json({
          status: false,
          message: "youre not authorized",
          data: null,
        });
      }

      const decoded = jwt.verify(token, JWT_SIGNATURE_KEY); // mengambil payload dimasukkan ke decoded
      req.user = decoded;

      next();
    } catch (error) {
      if (error.message == "jwt malformed") {
        return res.status(401).json({
          status: false,
          message: error.message,
          data: null,
        });
      }

      next(error);
    }
  },
};
