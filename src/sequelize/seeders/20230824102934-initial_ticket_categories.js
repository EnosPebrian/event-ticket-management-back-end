"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */ await queryInterface.bulkInsert(`ticket_categories`, [
      {
        id: 1,
        category_name: "VIP",
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 2,
        category_name: "PRESALE",
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 3,
        category_name: "NORMAL",
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 4,
        category_name: "FREE",
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
