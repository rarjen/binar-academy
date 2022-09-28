require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const app = express();

const { HTTP_PORT } = process.env;

app.use(express.json());
app.use(morgan("dev"));
app.use(router);

// handle 404
app.use((req, res, next) => {
  return res.status(404).json({
    status: false,
    message: "Are you lost?",
    data: null,
  });
});

// handle error 500
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: false,
    message: err.message,
    data: null,
  });
});

app.listen(HTTP_PORT, () => console.log("listening on port", HTTP_PORT));
