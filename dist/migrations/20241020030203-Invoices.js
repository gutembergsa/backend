'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Add altering commands here.
             *
             * Example:
             * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
             */
            yield queryInterface.createTable('Invoices', {
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
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Add reverting commands here.
             *
             * Example:
             * await queryInterface.dropTable('users');
             */
            yield queryInterface.dropTable('Invoices');
        });
    },
};
//# sourceMappingURL=20241020030203-Invoices.js.map