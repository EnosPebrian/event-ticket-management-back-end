"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ticket_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ticket_category.init(
    {
      category_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ticket_category",
    }
  );
  return ticket_category;
};
