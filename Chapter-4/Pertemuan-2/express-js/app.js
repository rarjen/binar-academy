const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.set("view engine", "ejs"); // melakukan set ke view engine ejs
// function logger(req, res, next) {
//   console.log(req.method, req.url);
//   next();
// }
// app.use(logger);

const morgan = require("morgan"); // import package morgan middleware logging
app.use(morgan("dev"));

const router = require("./routes"); // import folder (modules) router
app.use(router);

app.get("/", (req, res) => {
  //   return res.json({
  //     status: "success",
  //     message: "welcome to coba express",
  //   });
  return res.render("welcome"); // menampilkan welcome.js pada folder views
});

app.get("/iniError", (req, res) => {
  iniError;
});

// 500 error server
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "failed",
    message: err.message,
  });
});

// 404 error handler (tidak perlu di handling error nya)
app.use((req, res, next) => {
  res.status(400).json({
    status: "failed 400",
    message: "Are You Lost",
  });
});

app.listen(port, () => console.info(`Listening on port ${port}`));
