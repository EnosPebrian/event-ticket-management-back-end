"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  event_category.init(
    {
      id: DataTypes.INTEGER,
      category: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "event_category",
    }
  );
  return event_category;
};
