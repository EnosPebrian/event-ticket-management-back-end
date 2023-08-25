"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Discussion_reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Discussion_reply.belongsTo(models.Discussion, {
        foreignKey: "id",
      });
      Discussion_reply.belongsTo(models.User, { foreignKey: "id" });
      Discussion_reply.belongsTo(models.Event, { foreignKey: "id" });
    }
  }
  Discussion_reply.init(
    {
      eventid: DataTypes.INTEGER,
      userid: DataTypes.INTEGER,
      discussion_id: DataTypes.INTEGER,
      reply_text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Discussion_reply",
    }
  );
  return Discussion_reply;
};
