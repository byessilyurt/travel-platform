"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Locations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      place_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      post_code: {
        type: Sequelize.STRING,
      },
      year_founded: {
        type: Sequelize.INTEGER,
      },
      last_updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      description: {
        type: Sequelize.TEXT,
      },
      source: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Locations");
  },
};
