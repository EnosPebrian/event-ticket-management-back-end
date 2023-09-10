"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: `locations` }, key: "id" },
      },
      venue: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: `event_categories` }, key: "id" },
      },
      date_start: {
        type: Sequelize.DATEONLY,
      },
      date_end: {
        type: Sequelize.DATEONLY,
      },
      time_start: {
        type: Sequelize.TIME,
      },
      time_end: {
        type: Sequelize.TIME,
      },
      description: {
        type: Sequelize.TEXT,
      },
      vip_ticket_price: {
        type: Sequelize.INTEGER,
      },
      vip_ticket_stock: {
        type: Sequelize.INTEGER,
      },
      presale_ticket_price: {
        type: Sequelize.INTEGER,
      },
      presale_ticket_stock: {
        type: Sequelize.INTEGER,
      },
      normal_ticket_price: {
        type: Sequelize.INTEGER,
      },
      normal_ticket_stock: {
        type: Sequelize.INTEGER,
      },
      event_creator_userid: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: `users` }, key: `id` },
      },
      isfree: {
        type: Sequelize.BOOLEAN,
      },
      is_sponsored: {
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
    await queryInterface.dropTable("events");
  },
};
