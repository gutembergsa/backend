import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../services';
import Instalacao from './instalacao';

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

const Invoice = sequelize.define('Invoice', {
  numeroCliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numeroInstalacao: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: { tableName: 'Instalacao' },
      key: 'numeroInstalacao',
    },
  },
  mesReferencia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  energiaEletricaKWh: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  energiaEletricaValor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  energiaSCEEKWh: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  energiaSCEEValor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  energiaCompensadaKWh: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  energiaCompensadaValor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  contribuIlumPublica: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Invoice.belongsTo(Instalacao, { foreignKey: 'numeroInstalacao' });

export default Invoice;
