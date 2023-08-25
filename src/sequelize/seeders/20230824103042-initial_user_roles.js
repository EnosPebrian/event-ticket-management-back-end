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
    await queryInterface.bulkInsert(`user_roles`, [
      {
        id: 1,
        role_name: "Admin",
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 2,
        role_name: "Inspector",
        createdAt: Sequelize.fn(`NOW`),
        updatedAt: Sequelize.fn(`NOW`),
      },
      {
        id: 3,
        role_name: "Public",
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
