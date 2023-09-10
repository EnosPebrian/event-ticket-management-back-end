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
        references: { model: { tableName: `Events`, key: `id` } },
        onDelete: "cascade",
      },
      userid: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: `Users`, key: `id` } },
      },
      discussion_id: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: `Discussions`, key: "id" } },
      },
      reply_text: {
        type: Sequelize.STRING,
        allowNull: false,
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
