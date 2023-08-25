"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket_category.hasMany(models.Ticket, { foreignKey: "category" });
    }
  }
  Ticket_category.init(
    {
      category_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Ticket_category",
    }
  );
  return Ticket_category;
};
