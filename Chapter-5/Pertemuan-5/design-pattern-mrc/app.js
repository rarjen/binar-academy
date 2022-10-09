require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const port = process.env.HTTP_PORT;
const app = express();
const router = require("./routes");

try {
  app.use(morgan("dev"));
  app.use(router);

  app.use((req, res, next) => {
    return res.status(400).json({
      status: false,
      message: "Page NOT FOUND",
      data: null,
    });
  });

  app.use((err, req, res, next) => {
    return res.status(500).json({
      status: false,
      message: `Internal Server Error ${err.message}`,
      data: null,
    });
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
} catch (error) {
  console.log(`Database Error: ${error.message}`);
}
