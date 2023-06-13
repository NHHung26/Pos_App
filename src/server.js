const express = require("express");
const { sequelize } = require("./models");

const app = express();
const PORT = 3000;

app.use(express.static("./src/public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.listen(PORT, async () => {
  console.log("localhost:3000");
  try {
    await sequelize.authenticate();
    console.log("connect success");
  } catch (error) {
    console.log("error: " + error);
  }
});
