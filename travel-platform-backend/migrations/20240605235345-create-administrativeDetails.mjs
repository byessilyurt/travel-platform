"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("AdministrativeDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      local_gov_id: {
        type: Sequelize.INTEGER,
      },
      local_gov: {
        type: Sequelize.STRING,
      },
      state_id: {
        type: Sequelize.INTEGER,
      },
      state: {
        type: Sequelize.STRING,
      },
      country_code: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      administrative_level: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("AdministrativeDetails");
  },
};
