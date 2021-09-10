'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PizzaEdge extends Model {
        static associate(models) {
            this.hasMany(models.item);
        }
    };

    PizzaEdge.init({
		'pizzaEdgeId': {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		'name': {
			type: DataTypes.STRING,
			defaultValue: ''
        },
        'price': {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            defaultValue: ''
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
        modelName: 'pizzaEdge'
    });

    return PizzaEdge;
};