const express = require("express");
const { sequelize } = require("./models");
const { userRoute } = require("./router/user.rout");

const app = express();
const PORT = 3000;

app.use(express.static("./src/public"));
app.use(express.json());

app.use("/api/v1", userRoute);

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
