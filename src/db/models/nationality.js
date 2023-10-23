'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nationality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nationality.init({
    title: DataTypes.STRING,
    country: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Nationality',
  });
  return Nationality;
};