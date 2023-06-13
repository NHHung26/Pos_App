"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Staff.init(
    {
      staff_name: DataTypes.STRING,
      address: DataTypes.STRING,
      number_phone: DataTypes.STRING,
      work_time: DataTypes.INTEGER,
      wage: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Staff",
    }
  );
  return Staff;
};
