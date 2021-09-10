'use strict';
const { Model } = require('sequelize');

// Granular order payment information,
// including prepaid and pending values
module.exports = (sequelize, DataTypes) => {
    class Payment extends Model {
        static associate(models) {
            this.belongsTo(models.order);
        }
    };

    Payment.init({
		'paymentId': {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		'paymentMethod': {
			type: DataTypes.ENUM,
            values: [ 'credit', 'debit', 'cash', 'pix', 'points', 'exchange', 'other' ],
			defaultValue: 'cash',
            comment: 'Payment method information'
        },
        'value': {
            type: DataTypes.DECIMAL(10, 2),
            comment: 'Amount paid via this method'
        },
        'status': {
            type: DataTypes.ENUM,
            values: [ 'pending', 'ok', 'devolution' ],
            defaultValue: 'pending',
            comment: 'To receive or already paid'
        },
        'obs': {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        'orderId': DataTypes.INTEGER
    },{
        sequelize,
        modelName: 'payment'
    });

    return Payment;
};