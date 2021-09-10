'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
    	await queryInterface.bulkInsert('clients', [
			{
				"name": "Matheus",
				"phone": "(82) 98899 2010",
				"points": 0, 
				"status": true,
				"obs": "",
				"addresses": []
			},{
				"name": "Pedro",
				"phone": "(82) 98899 2012",
				"points": 0, 
				"status": true,
				"obs": "",
				"addresses": []
			},{
				"name": "Andre",
				"phone": "(82) 98899 2011",
				"points": 0, 
				"status": true,
				"obs": "",
				"addresses": []
			}
		], {});
  	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('client', null, {});
	}
};
