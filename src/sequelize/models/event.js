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
      Event.hasMany(models.Discussion, { foreignKey: "eventid" });
      Event.hasMany(models.Discussion_reply, { foreignKey: "eventid" });
      Event.hasMany(models.Review, { foreignKey: "eventid" });
      Event.hasMany(models.Ticket, { foreignKey: "eventid" });
      Event.hasMany(models.Photo_event, { foreignKey: "eventid" });
      Event.belongsTo(models.User, { foreignKey: "id" });
      Event.belongsTo(models.Location, { foreignKey: "id" });
      Event.belongsTo(models.Event_category, { foreignKey: "id" });
    }
  }
  Event.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.INTEGER,
      venue: DataTypes.STRING,
      category: DataTypes.INTEGER,
      date_start: DataTypes.DATEONLY,
      date_end: { type: DataTypes.DATEONLY, allowNull: true },
      time_start: DataTypes.TIME,
      time_end: { type: DataTypes.TIME, allowNull: true },
      description: DataTypes.TEXT,
      vip_ticket_price: { type: DataTypes.INTEGER, allowNull: true },
      vip_ticket_stock: { type: DataTypes.INTEGER, allowNull: true },
      presale_ticket_price: { type: DataTypes.INTEGER, allowNull: true },
      presale_ticket_stock: { type: DataTypes.INTEGER, allowNull: true },
      normal_ticket_price: { type: DataTypes.INTEGER, allowNull: true },
      normal_ticket_stock: { type: DataTypes.INTEGER, allowNull: true },
      event_creator_userid: { type: DataTypes.INTEGER, allowNull: true },
      isfree: DataTypes.BOOLEAN,
      is_sponsored: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
