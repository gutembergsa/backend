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
import fs from 'fs';
import pdf from 'pdf-parse';
const extractDataFromPDF = (pdfPath) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    const dataBuffer = fs.readFileSync(pdfPath);
    const pdfData = yield pdf(dataBuffer);
    const text = pdfData.text;
    console.log({
        test: (_a = pdfData.text.match(/Energia compensada GD I/)) === null || _a === void 0 ? void 0 : _a[0],
    });
    const clientNumber = (_b = text.match(/Nº DO CLIENTE\s+(\d+)/)) === null || _b === void 0 ? void 0 : _b[1];
    const referenceMonth = (_c = text.match(/Referente a\s+(\w+\/\d+)/)) === null || _c === void 0 ? void 0 : _c[1];
    const energyElectricKWh = parseFloat((_e = (_d = text.match(/Energia Elétrica kWh\s+(\d+)/)) === null || _d === void 0 ? void 0 : _d[1]) !== null && _e !== void 0 ? _e : '0');
    const energyElectricValue = parseFloat((_h = (_g = (_f = text
        .match(/Energia Elétrica kWh\s+\d+\s+([\d,]+)/)) === null || _f === void 0 ? void 0 : _f[1]) === null || _g === void 0 ? void 0 : _g.replace(',', '.')) !== null && _h !== void 0 ? _h : '0');
    const energySCEEKWh = parseFloat((_k = (_j = text.match(/Energia SCEE s\/ ICMS kWh\s+(\d+)/)) === null || _j === void 0 ? void 0 : _j[1]) !== null && _k !== void 0 ? _k : '0');
    const energySCEEValue = parseFloat((_o = (_m = (_l = text
        .match(/Energia SCEE s\/ ICMS kWh\s+\d+\s+([\d,]+)/)) === null || _l === void 0 ? void 0 : _l[1]) === null || _m === void 0 ? void 0 : _m.replace(',', '.')) !== null && _o !== void 0 ? _o : '0');
    const energyCompensatedKWh = parseFloat((_q = (_p = text.match(/Energia compensada GD I kWh\s+(\d+)/)) === null || _p === void 0 ? void 0 : _p[1]) !== null && _q !== void 0 ? _q : '0');
    const energyCompensatedValue = parseFloat((_t = (_s = (_r = text
        .match(/Energia compensada GD I kWh\s+\d+\s+([\d,]+)/)) === null || _r === void 0 ? void 0 : _r[2]) === null || _s === void 0 ? void 0 : _s.replace(',', '.')) !== null && _t !== void 0 ? _t : '0');
    const publicLightingContribution = parseFloat((_w = (_v = (_u = text
        .match(/Contrib Ilum Publica Municipal\s+([\d,]+)/)) === null || _u === void 0 ? void 0 : _u[1]) === null || _v === void 0 ? void 0 : _v.replace(',', '.')) !== null && _w !== void 0 ? _w : '0');
    return {
        clientNumber: clientNumber !== null && clientNumber !== void 0 ? clientNumber : '',
        referenceMonth: referenceMonth !== null && referenceMonth !== void 0 ? referenceMonth : '',
        energyElectricKWh,
        energyElectricValue,
        energySCEEKWh,
        energySCEEValue,
        energyCompensatedKWh,
        energyCompensatedValue,
        publicLightingContribution,
    };
});
// Exemplo de uso
extractDataFromPDF('C:\\Users\\Gutemberg\\lumi-backend\\invoices\\invoice_1.pdf').then((data) => data);
export default extractDataFromPDF;
