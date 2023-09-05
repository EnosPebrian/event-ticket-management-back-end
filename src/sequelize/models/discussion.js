"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Discussion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Discussion.hasMany(models.Discussion_reply, {
        foreignKey: "discussion_id",
      });
      Discussion.belongsTo(models.User, { foreignKey: "id" });
      Discussion.belongsTo(models.Event, { foreignKey: "id" });
    }
  }
  Discussion.init(
    {
      eventid: DataTypes.INTEGER,
      userid: DataTypes.INTEGER,
      question_text: DataTypes.STRING,
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Discussion",
    }
  );
  return Discussion;
};
