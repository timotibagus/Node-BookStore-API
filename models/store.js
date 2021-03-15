'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Store extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
		}
	}
	Store.init(
		{
			store_name: DataTypes.STRING,
			address: DataTypes.STRING
		},
		{
			timestamps: false,
			sequelize,
			modelName: 'Store'
		}
	);

	Store.associate = (models) => {
		Store.belongsToMany(models.Book, {
			through: models.Inventory,
			as: 'books',
			foreignKey: 'store_id'
		});
	};
	return Store;
};
