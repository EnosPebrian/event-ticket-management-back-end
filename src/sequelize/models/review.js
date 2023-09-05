"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, { foreignKey: "id" });
      Review.belongsTo(models.Ticket, { foreignKey: "id" });
      Review.belongsTo(models.Event, { foreignKey: "id" });
    }
  }
  Review.init(
    {
      eventid: DataTypes.INTEGER,
      userid: DataTypes.INTEGER,
      ratings: DataTypes.INTEGER,
      ticketcode: DataTypes.STRING,
      comments: DataTypes.TEXT,
      show_name: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
