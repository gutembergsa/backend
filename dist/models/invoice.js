"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const services_1 = require("../services");
// class Invoice extends Model {}
// Invoice.init(
//   {
//     numeroCliente: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     numeroInstalacao: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     mesReferencia: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     energiaEletricaKWh: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     energiaEletricaValor: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     energiaSCEEKWh: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     energiaSCEEValor: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     energiaCompensadaKWh: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     energiaCompensadaValor: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     contribuIlumPublica: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'Invoice',
//   }
// );
const Invoice = services_1.sequelize.define('Invoice', {
    numeroCliente: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    numeroInstalacao: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: { tableName: 'Instalacao' },
            key: 'numeroInstalacao',
        },
    },
    mesReferencia: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    energiaEletricaKWh: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    energiaEletricaValor: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    energiaSCEEKWh: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    energiaSCEEValor: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    energiaCompensadaKWh: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    energiaCompensadaValor: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    contribuIlumPublica: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
});
// Invoice.belongsTo(Instalacao, { foreignKey: 'numeroInstalacao' });
exports.default = Invoice;
//# sourceMappingURL=invoice.js.map