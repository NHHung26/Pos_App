const { User } = require("../models");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
  try {
    const { user_name, address, number_phone, email, password, role } =
      req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const register = await User.create({
      user_name,
      address,
      number_phone,
      email,
      password: hashPassword,
      role,
    });
    if (register) {
      res.status(201).send("Successfully registered");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const getAllUsers = await User.findAll({
      user_name,
      address,
      number_phone,
      email,
    });
    if (getAllUsers) {
      res.status(200).send(getAllUsers);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = {
  register: register,
  getAllUsers: getAllUsers,
};
