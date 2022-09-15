const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.set("view engine", "ejs");
// function logger(req, res, next) {
//   console.log(req.method, req.url);
//   next();
// }
// app.use(logger);

const morgan = require("morgan");
app.use(morgan("dev"));

const router = require("./routes");
app.use(router);

app.get("/", (req, res) => {
  //   return res.json({
  //     status: "success",
  //     message: "welcome to coba express",
  //   });
  return res.render("welcome");
});

app.get("/iniError", (req, res) => {
  iniError;
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "failed",
    message: err.message,
  });
});

//404 error handler (tidak perlu di handling error nya)
app.use((req, res, next) => {
  res.status(400).json({
    status: "failed 400",
    message: "Are You Lost",
  });
});

app.listen(port, () => console.info(`Listening on port ${port}`));
