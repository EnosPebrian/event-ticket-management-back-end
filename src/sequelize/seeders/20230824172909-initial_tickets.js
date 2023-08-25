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
    await queryInterface.bulkInsert(`tickets`, [
      {
        id: 1,
        userid: 1,
        eventid: 3,
        ticketcode: "test",
        ticket_price: 5000000,
        ticket_category: 1,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 2,
        userid: 3,
        eventid: 3,
        ticketcode: "5e02f51b-3a0e-b589-0033-bfdfae7bd92e",
        ticket_price: 5000000,
        ticket_category: 1,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 3,
        userid: 3,
        eventid: 3,
        ticketcode: "f80b5a6f-288c-f0ce-54d6-f1800c0c1093",
        ticket_price: 5000000,
        ticket_category: 1,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 7,
        userid: 6,
        eventid: 3,
        ticketcode: "943e950b-810f-718e-05bf-936a9767e37b",
        ticket_price: 5000000,
        ticket_category: 1,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 8,
        userid: 6,
        eventid: 12,
        ticketcode: "44b18128-2dc4-0ee8-414d-d4a6d9563148",
        ticket_price: 205000,
        ticket_category: 1,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 9,
        userid: 6,
        eventid: 4,
        ticketcode: "4347b587-082c-0d07-f9f8-ef329c50e012",
        ticket_price: 2000000,
        ticket_category: 1,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 10,
        userid: 6,
        eventid: 8,
        ticketcode: "661330c0-8ef1-081f-0a66-812fd9556e0a",
        ticket_price: 110000,
        ticket_category: 1,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 11,
        userid: 6,
        eventid: 2,
        ticketcode: "efe4900e-88fe-e40e-cf1d-3b074d38cf01",
        ticket_price: null,
        ticket_category: 4,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 12,
        userid: 6,
        eventid: 2,
        ticketcode: "f9694a7b-6e2a-b255-48e7-d3ce5ef5a1d8",
        ticket_price: null,
        ticket_category: 4,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 13,
        userid: 6,
        eventid: 2,
        ticketcode: "246ca8d9-503b-501d-cd17-305feaf364fa",
        ticket_price: null,
        ticket_category: 4,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 14,
        userid: 1,
        eventid: 6,
        ticketcode: "8b780f1c-a886-c9c6-f2cd-cd2f942b523c",
        ticket_price: 69000,
        ticket_category: 2,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 17,
        userid: 21,
        eventid: 6,
        ticketcode: "f4da409f-520e-dbde-13c5-9472ff691af2",
        ticket_price: 69000,
        ticket_category: 2,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 18,
        userid: 21,
        eventid: 6,
        ticketcode: "fac83f7a-6cd0-6bf1-1542-2018407095a9",
        ticket_price: 69000,
        ticket_category: 2,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 19,
        userid: 21,
        eventid: 3,
        ticketcode: "3c172708-a357-4182-86e5-35db57ded47f",
        ticket_price: 5000000,
        ticket_category: 1,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 20,
        userid: 21,
        eventid: 3,
        ticketcode: "c6085b1f-aa51-6ef0-bb4a-233d9207c5c8",
        ticket_price: 5000000,
        ticket_category: 1,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
      },
      {
        id: 21,
        userid: 3,
        eventid: 3,
        ticketcode: "c8271c70-af77-8cc9-14c7-5876c71efce1",
        ticket_price: 2,
        ticket_category: 2,
        updatedAt: Sequelize.fn(`NOW`),
        createdAt: "2023-08-01 00:00:00",
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
