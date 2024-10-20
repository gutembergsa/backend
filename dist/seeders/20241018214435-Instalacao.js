'use strict';
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
const { extractInstalacaoDataFromPDF } = require('../services');
const invoicesDir = path.join(__dirname.replace('\\dist', ''), '../invoices');
module.exports = {
    up(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Add seed commands here.
             *
             * Example:
             * await queryInterface.bulkInsert('People', [{
             *   name: 'John Doe',
             *   isBetaMember: false
             * }], {});
             */
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
                    const invoiceData = yield extractInstalacaoDataFromPDF(filePath);
                    // Adiciona à lista de invoices a serem inseridos no banco
                    invoices.push({
                        nomeInstalacao: invoiceData.nomeInstalacao,
                        numeroInstalacao: invoiceData.numeroInstalacao,
                        distribuidora: invoiceData.distribuidora,
                        consumidor: invoiceData.consumidor,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    });
                }
                // Insere todas as invoices extraídas no banco de dados
                yield queryInterface.bulkInsert('Instalações', invoices, {});
            }
            catch (error) {
                console.error('Erro ao inserir dados de fatura: ', error);
            }
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Add commands to revert seed here.
             *
             * Example:
             * await queryInterface.bulkDelete('People', null, {});
             */
        });
    },
};
//# sourceMappingURL=20241018214435-Instalacao.js.map