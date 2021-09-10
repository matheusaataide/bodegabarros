'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clients', { 
      clientId: Sequelize.INTEGER,
      name: Sequelize.STRING,
      phone: Sequelize.STRING,
      points: Sequelize.INTEGER,
      status: Sequelize.BOOLEAN,
      obs: Sequelize.TEXT
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clients');
  }
};
