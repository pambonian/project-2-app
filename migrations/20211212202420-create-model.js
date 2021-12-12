'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      manufacturer: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      maxRange: {
        type: Sequelize.INTEGER
      },
      maxOccupants: {
        type: Sequelize.INTEGER
      },
      maxSpeed: {
        type: Sequelize.INTEGER
      },
      usefulLoad: {
        type: Sequelize.INTEGER
      },
      takeoffLength: {
        type: Sequelize.INTEGER
      },
      fuelCap: {
        type: Sequelize.INTEGER
      },
      wikiLink: {
        type: Sequelize.STRING
      },
      imageLink: {
        type: Sequelize.STRING
      },
      videoLink: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Models');
  }
};