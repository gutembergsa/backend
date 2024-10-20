"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumeroInstalacao = exports.getFaturaSubClasse = void 0;
const utils_1 = require("../../../utils");
const getFaturaSubClasse = function () {
    var _a;
    const indexReferencia = (_a = this.lines) === null || _a === void 0 ? void 0 : _a.findIndex((value) => value.includes('Subclasse'));
    const isTruckedComercialType = this.lines[indexReferencia + 1].includes(utils_1.invoiceSubClasse.Comercial + utils_1.invoiceSubClasse.Comercial);
    const subClasse = isTruckedComercialType
        ? utils_1.invoiceSubClasse.Comercial
        : this.lines[indexReferencia + 1].split(/\s+/)[1];
    return subClasse;
};
exports.getFaturaSubClasse = getFaturaSubClasse;
const getNumeroInstalacao = function () {
    var _a;
    if (((_a = this.line) === null || _a === void 0 ? void 0 : _a.includes('Referente a')) && (this === null || this === void 0 ? void 0 : this.index) && (this === null || this === void 0 ? void 0 : this.lines)) {
        const linhaReferencia = this.lines[this.index - 1].trim();
        this.data.numeroInstalacao = linhaReferencia.split(/\s+/)[1];
    }
    return this.data.numeroInstalacao;
};
exports.getNumeroInstalacao = getNumeroInstalacao;
//# sourceMappingURL=commons.js.map