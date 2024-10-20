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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractInstalacaoDataFromPDF = exports.extractInvoiceDataFromPDF = void 0;
const fs_1 = __importDefault(require("fs"));
const pdf_parse_1 = __importDefault(require("pdf-parse"));
const utils_1 = require("../../utils");
const invoice_1 = require("./functions/invoice");
const instalacao_1 = require("./functions/instalacao");
const commons_1 = require("./functions/commons");
const extractInvoiceDataFromPDF = (pdfPath) => __awaiter(void 0, void 0, void 0, function* () {
    const dataBuffer = fs_1.default.readFileSync(pdfPath);
    const pdfData = yield (0, pdf_parse_1.default)(dataBuffer);
    const data = extractInvoiceData(pdfData.text);
    return data;
});
exports.extractInvoiceDataFromPDF = extractInvoiceDataFromPDF;
const extractInstalacaoDataFromPDF = (pdfPath) => __awaiter(void 0, void 0, void 0, function* () {
    const dataBuffer = fs_1.default.readFileSync(pdfPath);
    const pdfData = yield (0, pdf_parse_1.default)(dataBuffer);
    const data = yield extractInstalacaoData(pdfData.text);
    return data;
});
exports.extractInstalacaoDataFromPDF = extractInstalacaoDataFromPDF;
const extractInvoiceData = (text) => {
    const lines = text.split('\n');
    const data = {};
    const subclasse = commons_1.getFaturaSubClasse.bind({ lines })();
    for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        const numbers = line.match(utils_1.numberMatchRegex);
        const params = {
            lines,
            data,
            line,
            index,
            numbers,
            subclasse,
        };
        [data.mesReferencia, data.numeroCliente] = [
            ...invoice_1.getNumClienteAndMesRefencia.bind(Object.assign({}, params))(),
        ];
        params.numbers = params.line.match(utils_1.numberMatchRegex);
        [data.energiaEletricaKWh, data.energiaEletricaValor] = [
            ...invoice_1.getEnergiaEletricaValue.bind(Object.assign({}, params))(),
        ];
        [data.energiaSCEEKWh, data.energiaSCEEValor] = [
            ...invoice_1.getEnergiaSCEESemICMSValue.bind(Object.assign({}, params))(),
        ];
        [data.energiaCompensadaKWh, data.energiaCompensadaValor] = [
            ...invoice_1.getEnergiaCompensadaGDValue.bind(Object.assign({}, params))(),
        ];
        data.contribuIlumPublica = invoice_1.getContribIlumPublicaMunicipalValue.bind(Object.assign({}, params))();
    }
    return Object.assign({}, data);
};
const extractInstalacaoData = (text) => __awaiter(void 0, void 0, void 0, function* () {
    const lines = text.split('\n');
    const data = {};
    const subclasse = commons_1.getFaturaSubClasse.bind({ lines })();
    for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        const params = { data, lines, line, index, subclasse };
        data.nomeInstalacao = data.consumidor = instalacao_1.getNomeInstalacao.bind(Object.assign({}, params))();
        data.numeroInstalacao = commons_1.getNumeroInstalacao.bind(Object.assign({}, params))();
        data.distribuidora = yield instalacao_1.getDistribuidora.bind(Object.assign({}, params))();
    }
    return Object.assign({}, data);
});
//# sourceMappingURL=index.js.map