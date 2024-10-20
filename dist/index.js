"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
server_1.default.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
// import path from 'path';
// import fs from 'fs';
// const invoicesDir = path.join(__dirname.replace('\\dist', ''), './invoices');
// const test = async () => {
//   try {
//     // Extrair os dados de todos PDF
//     const files = fs
//       .readdirSync(invoicesDir)
//       .filter((file) => file.endsWith('.pdf'));
//     // Processa cada arquivo PDF
//     for (const file of files) {
//       const pathToPDF = path.join(invoicesDir, file);
//       const invoiceData = await extractInvoiceDataFromPDF(pathToPDF);
//       const instalacaoData = await extractInstalacaoDataFromPDF(pathToPDF);
//       console.log({ file, invoiceData, instalacaoData });
//     }
//     // Extrair os dados do PDF COMERCIAL
//     // const invoiceData1 = await extractInvoiceDataFromPDF(
//     //   'C:\\Users\\Gutemberg\\lumi-backend\\invoices\\3001116735-08-2024.pdf'
//     // );
//     // console.log('COMERCIAL', { invoiceData1 });
//     // const invoiceData2 = await extractInvoiceDataFromPDF(
//     //   'C:\\Users\\Gutemberg\\lumi-backend\\invoices\\3001116735-07-2024.pdf'
//     // );
//     // console.log('COMERCIAL', { invoiceData2 });
//     // const invoiceData3 = await extractInvoiceDataFromPDF(
//     //   'C:\\Users\\Gutemberg\\lumi-backend\\invoices\\3001116735-04-2024.pdf'
//     // );
//     // console.log('COMERCIAL', { invoiceData3 });
//     // //Extrair os dados do PDF COMERCIAL E OUTROS
//     // const instalacaoData1 = await extractInstalacaoDataFromPDF(
//     //   'C:\\Users\\Gutemberg\\lumi-backend\\invoices\\3001116735-08-2024.pdf'
//     // );
//     // console.log('COMERCIAL', { instalacaoData1 });
//     // const invoiceData2 = await extractInvoiceDataFromPDF(
//     //   'C:\\Users\\Gutemberg\\lumi-backend\\invoices\\3001422762-09-2024.pdf'
//     // );
//     // console.log('OUTROS', { invoiceData2 });
//     // const instalacaoData2 = await extractInstalacaoDataFromPDF(
//     //   'C:\\Users\\Gutemberg\\lumi-backend\\invoices\\3001422762-09-2024.pdf'
//     // );
//     //console.log('OUTROS', { instalacaoData2 });
//   } catch (error) {
//     console.error('Erro ao testar dados de fatura: ', error);
//   }
// };
// test();
//# sourceMappingURL=index.js.map