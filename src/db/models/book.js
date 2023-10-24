'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsTo(models.Shelf, {foreignKey: 'shelf_id'}),
      Book.belongsTo(models.Genre, {foreignKey: 'genre_id'}),
      Book.belongsToMany(models.Author, {
        through: 'authors_books',
        timestamps: false,
      });
    }
  }
  Book.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};