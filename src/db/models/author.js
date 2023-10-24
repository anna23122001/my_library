'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Author.belongsTo(models.Nationality, {foreignKey: 'national_id'}),
      Author.belongsToMany(models.Book, {
				through: 'authors_books',
				timestamps: false,
			});
    }
  }
  Author.init({
    name: DataTypes.STRING,
    email: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};