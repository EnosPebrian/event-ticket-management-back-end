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
    }
  }
  Discussion.init(
    {
      eventid: DataTypes.INTEGER,
      userid: DataTypes.INTEGER,
      question_text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Discussion",
    }
  );
  return Discussion;
};
