const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const controller = require("./controllers");
const router = require("./routes");

// exprress ini kita bisa memakai semua module dan method dari express
app.use(express.json()); // untuk membaca body tipe json
app.use(morgan("dev")); // untuk logging
app.use("/public", express.static("public"));

app.set("view engine", "ejs"); // set view engine

// home endpoint
app.get("/", (_req, res) => {
  res.render("home");
});

// error endpoint diarahkan untuk menampilkan server-error.ejs
app.get("/error", (_req, _res) => {
  error; // mengembalikan error makanya langsung memanggil exception
});

app.use(router);

// jika ada error maka akan dilempar disini, harus ditaruh paling akhir

// handle 404
app.use(controller.notFound);

// server-error
app.use(controller.exception);

app.listen(port, () => console.info(`Listening on HTTP_PORT ${port}`));
