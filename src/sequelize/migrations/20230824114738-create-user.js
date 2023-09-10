"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      bio: {
        type: Sequelize.STRING,
      },
      points: {
        type: Sequelize.INTEGER,
      },
      referralcode: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: "user_roles" }, key: "id" },
      },
      birthdate: {
        type: Sequelize.DATEONLY,
      },
      location: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: `locations` }, key: "id" },
      },
      is_verified: {
        type: Sequelize.BOOLEAN,
      },
      reset_password_token: {
        type: Sequelize.STRING,
      },
      verify_token: {
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
    await queryInterface.dropTable("Users");
  },
};
