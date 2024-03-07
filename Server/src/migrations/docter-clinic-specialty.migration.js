"use strict";

const { Sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("docter_clinics_specialty", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      docterId: {
        type: Sequelize.INTEGER,
      },
      clinicId: {
        type: Sequelize.INTEGER,
      },
      specialtyId: {
        type: Sequelize.INTEGER,
      },
    
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("docter_clinics_specialty");
  },
};
