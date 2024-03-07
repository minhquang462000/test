"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: "123456",
        firstName: "guyen",
        lastName: "Quang",
        address: "Thaibinh",
        gender: 1,
        typeRole: "Role",
        keyRole: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};

