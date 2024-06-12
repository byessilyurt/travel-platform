"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("AlternativeNames", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      alternative_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alt_pronunciation: {
        type: Sequelize.STRING,
      },
      is_current: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("AlternativeNames");
  },
};
