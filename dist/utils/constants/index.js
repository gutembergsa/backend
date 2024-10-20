"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceSubClasse = exports.distribuidorasPorEstado = exports.CEPMatchRegex = exports.numberMatchRegex = exports.DB_URL = void 0;
exports.DB_URL = 'postgres://postgres:gutemberg@localhost:5432/lumi';
exports.numberMatchRegex = /\d+([.,]\d+)?/g;
exports.CEPMatchRegex = /^\d{2}\d{3}[-]\d{3}$/g;
exports.distribuidorasPorEstado = {
    MG: 'CEMIG',
};
exports.invoiceSubClasse = {
    Comercial: 'Comercial',
    Outros: 'Outros',
};
//# sourceMappingURL=index.js.map