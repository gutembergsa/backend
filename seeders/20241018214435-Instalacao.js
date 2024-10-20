'use strict';

const path = require('path');
const fs = require('fs');

const { extractInstalacaoDataFromPDF } = require('../services');

const invoicesDir = path.join(__dirname.replace('\\dist', ''), '../invoices');

module.exports = {
  async up(queryInterface) {
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
        const invoiceData = await extractInstalacaoDataFromPDF(filePath);

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
      await queryInterface.bulkInsert('Instalações', invoices, {});
    } catch (error) {
      console.error('Erro ao inserir dados de fatura: ', error);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
