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
const path = require('path');
const fs = require('fs');
const { extractInvoiceDataFromPDF } = require('../services');
const invoicesDir = path.join(__dirname.replace('\\dist', ''), '../invoices');
module.exports = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Lê todos os arquivos da pasta invoices
            const files = fs
                .readdirSync(invoicesDir)
                .filter((file) => file.endsWith('.pdf'));
            const invoices = [];
            // Processa cada arquivo PDF
            for (const file of files) {
                const filePath = path.join(invoicesDir, file);
                // Extrair os dados do PDF
                const invoiceData = yield extractInvoiceDataFromPDF(filePath);
                // Adiciona à lista de invoices a serem inseridos no banco
                invoices.push({
                    numeroCliente: invoiceData.numeroCliente,
                    numeroInstalacao: invoiceData.numeroInstalacao,
                    mesReferencia: invoiceData.mesReferencia,
                    energiaEletricaKWh: invoiceData.energiaEletricaKWh,
                    energiaEletricaValor: invoiceData.energiaEletricaValor,
                    energiaSCEEKWh: invoiceData.energiaSCEEKWh,
                    energiaSCEEValor: invoiceData.energiaSCEEValor,
                    energiaCompensadaKWh: invoiceData.energiaCompensadaKWh,
                    energiaCompensadaValor: invoiceData.energiaCompensadaValor,
                    contribuIlumPublica: invoiceData.contribuIlumPublica,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
            }
            // Insere todas as invoices extraídas no banco de dados
            yield queryInterface.bulkInsert('Invoices', invoices, {});
        }
        catch (error) {
            console.error('Erro ao inserir dados de fatura: ', error);
        }
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        // Remover os dados inseridos
        yield queryInterface.bulkDelete('Invoices', null, {});
    }),
};
//# sourceMappingURL=20241017144926-Invoices.js.map