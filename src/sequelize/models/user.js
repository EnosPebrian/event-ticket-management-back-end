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
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      bio: DataTypes.STRING,
      points: DataTypes.INTEGER,
      referralcode: { type: DataTypes.STRING, unique: true },
      role: DataTypes.STRING,
      birthdate: DataTypes.DATEONLY,
      location: DataTypes.INTEGER,
      is_verified: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
