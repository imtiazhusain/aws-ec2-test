const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(201).json({
    message: "hello world",
  });
});

app.listen(8000, () => {
  console.log("app is running");
});
