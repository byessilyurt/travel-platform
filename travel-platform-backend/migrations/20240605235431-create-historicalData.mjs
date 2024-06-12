"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("HistoricalData", {
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
      description: {
        type: Sequelize.TEXT,
      },
      source: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("HistoricalData");
  },
};
