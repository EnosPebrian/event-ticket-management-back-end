"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Discussion_replies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      eventid: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: `events`, key: `id` } },
      },
      userid: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: `users`, key: `id` } },
      },
      discussion_id: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: `discussions`, key: "id" } },
      },
      reply_text: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Discussion_replies");
  },
};
