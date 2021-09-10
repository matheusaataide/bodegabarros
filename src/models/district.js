'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class District extends Model {
        static associate(models) {
            this.hasMany(models.address, { as: 'addresses' });
        }
    };

    District.init({
		'districtId': {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		'name': {
			type: DataTypes.STRING,
			allowNull: false,
            validate: {
                notEmpty: { msg: 'Este campo não pode ficar vazio' }
            }
        },
        'deliveryPrice': {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
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
        modelName: 'district',
        timestamps: false
    });

    return District;
};