const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    const getAllUsers = await User.findAll();
    if (getAllUsers) {
      res.status(200).send(getAllUsers);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getDetailUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({
      where: {
        id: id,
      },
    });
    if (user) {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const { user_name, address, number_phone, email, password, role } =
      req.body;
    const updateUser = await User.update(
      { user_name, address, number_phone, email, password, role },
      {
        where: { id: id },
      }
    );
    if (updateUser) {
      res.status(200).send("updated user ");
    }
  } catch (error) {
    res.send(500).send(error.message);
  }
};
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUserById = await User.destroy({
      where: {
        id: id,
      },
    });
    if (deleteUserById) {
      res.status(200).send("delete success");
    }
  } catch (error) {
    res.send(500).send(error.message);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const login = await User.findOne({
    where: {
      email,
    },
  });
  if (login) {
    const isAuthenticated = bcrypt.compareSync(password, login.password);
    if (isAuthenticated) {
      const token = jwt.sign(
        { email: email, password: login.password },
        "huyhung26082002",
        { expiresIn: "1h" }
      );
      res.status(200).send(token);
    } else {
      res.status(500).send("Sai email or password");
    }
  } else {
    res.status(404).send("Email not found!!");
  }
};
module.exports = {
  register: register,
  getAllUsers: getAllUsers,
  getDetailUser: getDetailUser,
  updateUserById: updateUserById,
  deleteUserById: deleteUserById,
  login: login,
};
