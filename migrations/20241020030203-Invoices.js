'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      numeroCliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numeroInstalacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mesReferencia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      energiaEletricaKWh: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      energiaEletricaValor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      energiaSCEEKWh: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      energiaSCEEValor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      energiaCompensadaKWh: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      energiaCompensadaValor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      contribuIlumPublica: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Invoices');
  },
};
