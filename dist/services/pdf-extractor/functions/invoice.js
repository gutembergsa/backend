"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContribIlumPublicaMunicipalValue = exports.getEnergiaCompensadaGDValue = exports.getEnergiaSCEESemICMSValue = exports.getEnergiaEletricaValue = exports.getNumClienteAndMesRefencia = void 0;
const getNumClienteAndMesRefencia = function () {
    var _a, _b;
    if (((_a = this.line) === null || _a === void 0 ? void 0 : _a.includes('Referente a')) && (this === null || this === void 0 ? void 0 : this.index) && (this === null || this === void 0 ? void 0 : this.lines)) {
        if (this.index + 1 < ((_b = this.lines) === null || _b === void 0 ? void 0 : _b.length)) {
            const linhaReferencia1 = this.lines[this.index + 1].trim();
            const linhaReferencia2 = this.lines[this.index - 1].trim();
            this.data.mesReferencia = linhaReferencia1.split(/\s+/)[0];
            this.data.numeroCliente = linhaReferencia2.split(/\s+/)[0];
            this.data.numeroInstalacao = linhaReferencia2.split(/\s+/)[1];
        }
    }
    return [this.data.mesReferencia, this.data.numeroCliente];
};
exports.getNumClienteAndMesRefencia = getNumClienteAndMesRefencia;
const getEnergiaEletricaValue = function () {
    var _a;
    if (((_a = this.line) === null || _a === void 0 ? void 0 : _a.includes('Energia ElétricakWh')) && this.numbers) {
        this.data.energiaEletricaKWh = Number(this.numbers[0]);
        this.data.energiaEletricaValor = parseFloat(this.numbers[2].replace(',', '.'));
    }
    return [this.data.energiaEletricaKWh, this.data.energiaEletricaValor];
};
exports.getEnergiaEletricaValue = getEnergiaEletricaValue;
const getEnergiaSCEESemICMSValue = function () {
    var _a;
    if (((_a = this.line) === null || _a === void 0 ? void 0 : _a.includes('Energia SCEE s/ ICMS')) && this.numbers) {
        this.data.energiaSCEEKWh = Number(this.numbers[0]);
        this.data.energiaSCEEValor = parseFloat(this.numbers[2].replace(',', '.'));
    }
    return [this.data.energiaSCEEKWh, this.data.energiaSCEEValor];
};
exports.getEnergiaSCEESemICMSValue = getEnergiaSCEESemICMSValue;
const getEnergiaCompensadaGDValue = function () {
    var _a;
    if (((_a = this.line) === null || _a === void 0 ? void 0 : _a.includes('Energia compensada GD I')) && this.numbers) {
        this.data.energiaCompensadaKWh = Number(this.numbers[0]);
        this.data.energiaCompensadaValor = parseFloat(this.numbers[2].replace(',', '.'));
    }
    return [this.data.energiaCompensadaKWh, this.data.energiaCompensadaValor];
};
exports.getEnergiaCompensadaGDValue = getEnergiaCompensadaGDValue;
const getContribIlumPublicaMunicipalValue = function () {
    var _a;
    if ((_a = this.line) === null || _a === void 0 ? void 0 : _a.includes('Contrib Ilum Publica Municipal')) {
        const match = this.line.match(/([\d.,]+)/);
        if (match) {
            this.data.contribuIlumPublica = parseFloat(match[0].replace(',', '.'));
        }
    }
    return this.data.contribuIlumPublica;
};
exports.getContribIlumPublicaMunicipalValue = getContribIlumPublicaMunicipalValue;
//# sourceMappingURL=invoice.js.map