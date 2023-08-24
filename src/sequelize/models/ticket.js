"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init(
    {
      id: DataTypes.INTEGER,
      userid: DataTypes.INTEGER,
      eventid: DataTypes.INTEGER,
      ticketcode: DataTypes.STRING,
      ticket_category: DataTypes.INTEGER,
      ticket_price: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
