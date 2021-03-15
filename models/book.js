'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Book extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
		}
	}
	Book.init(
		{
			title: DataTypes.STRING,
			author: DataTypes.STRING,
			year: DataTypes.INTEGER
		},
		{
			sequelize,
			modelName: 'Book'
		}
	);

	Book.associate = (models) => {
		Book.belongsToMany(models.Store, {
			through: models.Inventory,
			as: 'store',
			foreignKey: 'book_id'
		});
	};

	return Book;
};
