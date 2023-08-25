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
      Ticket.belongsTo(models.Ticket_category, { foreignKey: "id" });
      Ticket.belongsTo(models.User, { foreignKey: "id" });
      Ticket.belongsTo(models.Event, { foreignKey: "id" });
      Ticket.hasOne(models.Review, { foreignKey: "ticketcode" });
    }
  }
  Ticket.init(
    {
      userid: DataTypes.INTEGER,
      eventid: DataTypes.INTEGER,
      ticketcode: DataTypes.STRING,
      category: DataTypes.INTEGER,
      ticket_price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
