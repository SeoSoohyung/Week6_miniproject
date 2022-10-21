'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Members', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          userId: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false,
          },
          nickname: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Members');
  }
};