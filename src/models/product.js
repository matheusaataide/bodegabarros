'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            this.belongsTo(models.category);
            this.hasMany(models.option);
        }
    };

    Product.init({
		'productId': {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		'description': {
			type: DataTypes.STRING,
			defaultValue: ''
        },
        'displayOrder': {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }, 
        'status': {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        'obs': {
            type: DataTypes.STRING,
            defaultValue: ''
        }
    },{
        sequelize,
        modelName: 'product',
        timestamps: false
    });

    return Product;
};