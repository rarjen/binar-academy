require("dotenv").config();
const express = require("express");
const port = process.env.HTTP_PORT;
const morgan = require("morgan");
const app = express();
const router = require("./routes");
const methodOverride = require("method-override");

try {
  app.use(express.json()); // untuk membaca body tipe json
  app.use(express.urlencoded({ extended: true })); // membaca data dari form
  app.use(morgan("dev")); // untuk logging
  app.set("view engine", "ejs");
  app.use(methodOverride("_method"));
  app.use(router);

  app.use((req, res, next) => {
    return res.status(404).json({
      status: false,
      message: "are you lost?",
      data: null,
    });
  });

  app.use((err, req, res, next) => {
    return res.status(500).json({
      status: false,
      message: console.log(err.message),
      data: null,
    });
  });

  app.listen(port, () => console.log("listening on port", port));
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
