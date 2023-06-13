const {
  register,
  getAllUsers,
  getDetailUser,
  updateUserById,
  deleteUserById,
  login,
} = require("../controller/user.controller");
const authenticate = require("../middleware/authentication");
const { checkExist } = require("../middleware/validations/checkExist");
const { User } = require("../models");
const express = require("express");
const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.get("/getallusers", getAllUsers);
userRoute.get("/:id", checkExist(User), authenticate, getDetailUser);
userRoute.put("/:id", checkExist(User), updateUserById);
userRoute.delete("/:id", checkExist(User), deleteUserById);
userRoute.post("/login", login);
module.exports = {
  userRoute,
};
