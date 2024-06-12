"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("GeographicalFeatures", {
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
      feature_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      latitude: {
        type: Sequelize.FLOAT,
      },
      longitude: {
        type: Sequelize.FLOAT,
      },
      elevation: {
        type: Sequelize.FLOAT,
      },
      area_size: {
        type: Sequelize.FLOAT,
      },
      population: {
        type: Sequelize.INTEGER,
      },
      place_spatial: {
        type: Sequelize.STRING,
      },
      accessibility_info: {
        type: Sequelize.TEXT,
      },
      source: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("GeographicalFeatures");
  },
};
