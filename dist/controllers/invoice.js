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
exports.getAllInvoicesByNumeroInstalacao = exports.getAllInvoicesByNumeroCliente = exports.getAllInvoicesByID = exports.getAllInvoices = void 0;
const models_1 = require("../models");
const getAllInvoices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield models_1.Invoice.findAll();
        res.status(200).json(invoices);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar faturas.' });
    }
});
exports.getAllInvoices = getAllInvoices;
const getAllInvoicesByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield models_1.Invoice.findAll({ where: { id: req.params.id } });
        res.status(200).json(invoices);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar faturas.' });
    }
});
exports.getAllInvoicesByID = getAllInvoicesByID;
const getAllInvoicesByNumeroCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield models_1.Invoice.findAll({
            where: { numeroCliente: req.params.numeroCliente },
        });
        res.status(200).json(invoices);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar faturas.' });
    }
});
exports.getAllInvoicesByNumeroCliente = getAllInvoicesByNumeroCliente;
const getAllInvoicesByNumeroInstalacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield models_1.Invoice.findAll({
            where: { numeroInstalacao: req.params.numeroInstalacao },
        });
        res.status(200).json(invoices);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar faturas.' });
    }
});
exports.getAllInvoicesByNumeroInstalacao = getAllInvoicesByNumeroInstalacao;
//# sourceMappingURL=invoice.js.map