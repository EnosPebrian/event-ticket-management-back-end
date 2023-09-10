"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reviews", {
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
      ratings: {
        type: Sequelize.INTEGER,
      },
      ticketcode: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      comments: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      show_name: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Reviews");
  },
};
