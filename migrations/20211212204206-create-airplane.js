'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelName: {
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
      fuelCapacity: {
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
    await queryInterface.dropTable('Airplanes');
  }
};