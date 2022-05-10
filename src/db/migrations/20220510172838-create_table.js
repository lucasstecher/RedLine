'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('cars', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      brand: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      kilometers: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      engine: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      picture: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('cars', null, {});
  }
};
