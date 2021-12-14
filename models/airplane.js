'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.airplane.belongsTo(models.Aircraft,(foreignKey: 'aircraftID'));
    }
  };
  Airplane.init({
    modelName: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    price: DataTypes.INTEGER,
    maxRange: DataTypes.INTEGER,
    maxOccupants: DataTypes.INTEGER,
    maxSpeed: DataTypes.INTEGER,
    usefulLoad: DataTypes.INTEGER,
    takeoffLength: DataTypes.INTEGER,
    fuelCapacity: DataTypes.INTEGER,
    wikiLink: DataTypes.STRING,
    imageLink: DataTypes.STRING,
    videoLink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};