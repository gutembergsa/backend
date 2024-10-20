"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const services_1 = require("../services");
// class Instalacao extends Model {}
const Instalacao = services_1.sequelize.define('Instalações', {
    numeroInstalacao: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nomeInstalacao: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    distribuidora: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    consumidor: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.default = Instalacao;
//# sourceMappingURL=instalacao.js.map