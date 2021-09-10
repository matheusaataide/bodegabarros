'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Item extends Model {
        static associate(models) {
            this.belongsTo(models.order);
            this.belongsTo(models.pizzaEdge);
            this.belongsToMany(models.option, { through: 'ItemOption' });
        }
    };

    Item.init({
		'itemId': {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		'option': {
			type: DataTypes.STRING,
			defaultValue: ''
		},
        'fractions': {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }, 
        'obs': {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        'orderId': DataTypes.INTEGER,
        'pizzaEdgeId': DataTypes.INTEGER
    },{
        sequelize,
        modelName: 'item',
        timestamps: false
    });

    return Item;
};