const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

app.get("/", async (req, res) => {
  res.send("Hello,  World!");
});

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
