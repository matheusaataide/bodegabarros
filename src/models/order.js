'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            this.belongsTo(models.client);
            this.belongsTo(models.address);
            this.hasMany(models.item);
            this.hasMany(models.payment);
        }
    };

    Order.init({
		'orderId': {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		'benefit': {
			type: DataTypes.DECIMAL(10, 2),
			defaultValue: 0,
            comment: 'A benefit applied to the order'
        },
        'addition': {
			type: DataTypes.DECIMAL(10, 2),
			defaultValue: 0,
            comment: 'A extra ingredient applied to the order'
        },
        'orderType': {
            type: DataTypes.ENUM,
            values: [ 'delivery', 'indoor', 'takeout' ],
            allowNull: false,
            defaultValue: 'delivery',
        },
        'status': {
            type: DataTypes.ENUM,
            values: [ 'placed', 'readyToPickup', 'dispatched', 'concluded', 'cancelled' ],
            defaultValue: 'placed'
        },
        'obs': {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        'clientId': DataTypes.INTEGER,
        'addressId': DataTypes.INTEGER
    },{
        sequelize,
        modelName: 'order',
        timestamps: true
    });

    return Order;
};