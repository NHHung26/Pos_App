const { register, getAllUsers } = require("../controller/user.controller");
const { User } = require("../models");
const express = require("express");
const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.get("/getallusers", getAllUsers);

module.exports = {
  userRoute,
};
