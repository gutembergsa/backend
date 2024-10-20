"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.extractInvoiceDataFromPDF = exports.extractInstalacaoDataFromPDF = void 0;
var index_js_1 = require("./pdf-extractor/index.js");
Object.defineProperty(exports, "extractInstalacaoDataFromPDF", { enumerable: true, get: function () { return index_js_1.extractInstalacaoDataFromPDF; } });
Object.defineProperty(exports, "extractInvoiceDataFromPDF", { enumerable: true, get: function () { return index_js_1.extractInvoiceDataFromPDF; } });
var db_1 = require("./db");
Object.defineProperty(exports, "sequelize", { enumerable: true, get: function () { return __importDefault(db_1).default; } });
//# sourceMappingURL=index.js.map