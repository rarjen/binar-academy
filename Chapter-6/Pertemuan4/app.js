const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Success",
  });
});

app.listen(port, () => console.log("listening on port", port));
