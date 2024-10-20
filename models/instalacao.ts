import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../services';
import Invoice from './invoice';

// class Instalacao extends Model {}

const Instalacao = sequelize.define('Instalações', {
  numeroInstalacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomeInstalacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  distribuidora: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  consumidor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Instalacao;
