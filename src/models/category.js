'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            this.hasMany(models.product);
        }
    };

    Category.init({
		'categoryId': {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		'name': {
			type: DataTypes.STRING,
			defaultValue: ''
		},
        'displayOrder': {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        'maxFractions': {
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
        modelName: 'category',
        timestamps: false
    });

    return Category;
};