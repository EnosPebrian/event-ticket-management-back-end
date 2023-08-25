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
     */
    await queryInterface.bulkInsert(`event_categories`, [
      {
        id: 1,
        category: `Music`,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 2,
        category: `Sport`,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 3,
        category: `Art`,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 4,
        category: `Game`,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 5,
        category: `Conference`,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 6,
        category: `Expo`,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 7,
        category: `Community`,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 8,
        category: `Travel`,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 9,
        category: `Food`,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 10,
        category: `Education`,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 11,
        category: `Job Fair`,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 12,
        category: `Kids`,
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 13,
        category: `Family`,
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
