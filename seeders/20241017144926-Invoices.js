const path = require('path');
const fs = require('fs');

const { extractInvoiceDataFromPDF } = require('../services');

const invoicesDir = path.join(__dirname.replace('\\dist', ''), '../invoices');

module.exports = {
  up: async (queryInterface) => {
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
        const invoiceData = await extractInvoiceDataFromPDF(filePath);

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
      await queryInterface.bulkInsert('Invoices', invoices, {});
    } catch (error) {
      console.error('Erro ao inserir dados de fatura: ', error);
    }
  },

  down: async (queryInterface) => {
    // Remover os dados inseridos
    await queryInterface.bulkDelete('Invoices', null, {});
  },
};
