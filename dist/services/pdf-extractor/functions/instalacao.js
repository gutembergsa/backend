"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistribuidora = exports.getNomeInstalacao = void 0;
const utils_1 = require("../../../utils");
// nomeInstalacao: string;
// numeroInstalacao: string;
// distribuidora: number;
// consumidor: number;
const getNomeInstalacao = function () {
    var _a, _b;
    if (((_a = this.line) === null || _a === void 0 ? void 0 : _a.includes('AutomáticoInstalaçãoVencimentoTotal')) &&
        (this === null || this === void 0 ? void 0 : this.index) &&
        (this === null || this === void 0 ? void 0 : this.lines)) {
        const index = this.subclasse === utils_1.invoiceSubClasse.Comercial ? 3 : 5;
        if (this.index + index < ((_b = this.lines) === null || _b === void 0 ? void 0 : _b.length)) {
            const linhaReferencia = this.lines[this.index + index].trim();
            this.data.nomeInstalacao = linhaReferencia.split(/\d+/)[0].trim();
        }
    }
    return this.data.nomeInstalacao;
};
exports.getNomeInstalacao = getNomeInstalacao;
// export const getNumeroInstalacao = function (this: PDFHelperBind) {
//   if (this.line?.includes('Referente a') && this?.index && this?.lines) {
//     const linhaReferencia = this.lines[this.index - 1].trim();
//     this.data.numeroInstalacao = linhaReferencia.split(/\s+/)[1];
//   }
//   return this.data.numeroInstalacao;
// };
const getDistribuidora = function () {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (((_a = this.line) === null || _a === void 0 ? void 0 : _a.includes('AutomáticoInstalaçãoVencimentoTotal')) &&
            (this === null || this === void 0 ? void 0 : this.index) &&
            (this === null || this === void 0 ? void 0 : this.lines)) {
            const index = this.subclasse === utils_1.invoiceSubClasse.Comercial ? 6 : 8;
            if (this.index + 1 < ((_b = this.lines) === null || _b === void 0 ? void 0 : _b.length)) {
                const linhaReferencia = this.lines[this.index + index].trim();
                const estado = linhaReferencia
                    .split(',')[1]
                    .trim();
                this.data.distribuidora = utils_1.distribuidorasPorEstado[estado];
            }
        }
        return this.data.distribuidora;
    });
};
exports.getDistribuidora = getDistribuidora;
//# sourceMappingURL=instalacao.js.map