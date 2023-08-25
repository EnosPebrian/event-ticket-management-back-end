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
      User.hasMany(models.Event, { foreignKey: "userid" });
      User.hasMany(models.Review, { foreignKey: "userid" });
      User.hasMany(models.Ticket, { foreignKey: "userid" });
      User.hasMany(models.Discussion, { foreignKey: "userid" });
      User.hasMany(models.Discussion_reply, { foreignKey: "userid" });
      User.belongsTo(models.Location, { foreignKey: "id" });
      User.belongsTo(models.User_role, { foreignKey: "id" });
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
      is_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
