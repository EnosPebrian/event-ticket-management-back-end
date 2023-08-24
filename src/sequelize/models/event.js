"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init(
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      venue: DataTypes.STRING,
      category: DataTypes.STRING,
      date_start: DataTypes.DATEONLY,
      date_end: DataTypes.DATEONLY,
      time_start: DataTypes.TIME,
      time_end: DataTypes.TIME,
      description: DataTypes.TEXT,
      vip_ticket_price: DataTypes.INTEGER,
      vip_ticket_stock: DataTypes.INTEGER,
      presale_ticket_price: DataTypes.INTEGER,
      presale_ticket_stock: DataTypes.INTEGER,
      normal_ticket_price: DataTypes.INTEGER,
      normal_ticket_stock: DataTypes.INTEGER,
      event_creator_userid: DataTypes.INTEGER,
      isfree: DataTypes.INTEGER,
      is_sponsored: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
