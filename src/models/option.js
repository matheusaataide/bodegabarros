'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Option extends Model {
        static associate(models) {
            this.belongsTo(models.product);
            this.belongsToMany(models.item, { through: 'ItemOption' });
        }
    };

    Option.init({
		'optionId': {
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
        },
        'price': {
            type: DataTypes.DOUBLE,
            defaultValue: 0.0
        },
        'productId': DataTypes.INTEGER
    },{
        sequelize,
        modelName: 'option',
        timestamps: false
    });

    return Option;
};