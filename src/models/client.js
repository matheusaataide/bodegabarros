'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Client extends Model {
        static associate(models) {
            this.hasMany(models.order);
            this.hasMany(models.address, { as: 'addresses'});
        }
    };

    Client.init({
		'clientId': {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		'name': {
			type: DataTypes.STRING,
			allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Este campo não pode estar vazio!'
                }
            }
        },
        'phone': {
            type: DataTypes.STRING,
            unique: {
                msg: 'Este telefone já foi cadastrado'
            },
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Este campo não pode ficar vazio"
                },
                is: {
                    args: /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/i,
                    msg: "Formatação errada. Siga o padrão (00) 00000-0000"
                }
            }
        },
        'score': {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        'status': {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        'obs': {
            type: DataTypes.TEXT,
            defaultValue: ''
        }
    },{
        sequelize,
        modelName: 'client',
        tableName: 'clients',
        timestamps: true
    });

    return Client;
};