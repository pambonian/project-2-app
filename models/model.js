'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Model.init({
    name: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    price: DataTypes.INTEGER,
    maxRange: DataTypes.INTEGER,
    maxOccupants: DataTypes.INTEGER,
    maxSpeed: DataTypes.INTEGER,
    usefulLoad: DataTypes.INTEGER,
    takeoffLength: DataTypes.INTEGER,
    fuelCap: DataTypes.INTEGER,
    wikiLink: DataTypes.STRING,
    imageLink: DataTypes.STRING,
    videoLink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Model',
  });
  return Model;
};