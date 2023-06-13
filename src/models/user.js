"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      user_name: DataTypes.STRING,
      address: DataTypes.STRING,
      number_phone: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: DataTypes.STRING,
      role: { type: DataTypes.STRING, defaultValue: "staff" },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
