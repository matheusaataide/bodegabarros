'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Address extends Model {
        static associate(models) {
            this.belongsTo(models.client);
            this.belongsTo(models.district);
            this.hasMany(models.order);
        }
    };

    Address.init({
		'addressId': {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		'streetName': {
			type: DataTypes.TEXT,
			defaultValue: ''
        },
        'streetNumber': {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        'complement': {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        'reference': {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        'obs': {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        'clientId': DataTypes.INTEGER,
        'districtId': DataTypes.INTEGER
    },{
        sequelize,
        modelName: 'address'
    });

    return Address;
};