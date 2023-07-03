const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  console.log("server is listening...");
  res.send("server is listening...");
});

app.listen(7788, () => {
  console.log("server is listening on port 7788");
});
