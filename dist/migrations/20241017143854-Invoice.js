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
                    primaryKey: true,
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
                clientNumber: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                referenceMonth: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                energyElectricKWh: {
                    type: Sequelize.FLOAT,
                    allowNull: false,
                },
                energyElectricValue: {
                    type: Sequelize.FLOAT,
                    allowNull: false,
                },
                energySCEEKWh: {
                    type: Sequelize.FLOAT,
                    allowNull: false,
                },
                energySCEEValue: {
                    type: Sequelize.FLOAT,
                    allowNull: false,
                },
                energyCompensatedKWh: {
                    type: Sequelize.FLOAT,
                    allowNull: false,
                },
                energyCompensatedValue: {
                    type: Sequelize.FLOAT,
                    allowNull: false,
                },
                publicLightingContribution: {
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
//# sourceMappingURL=20241017143854-Invoice.js.map