import fs from 'fs';
import pdf from 'pdf-parse';

import { Invoice, Instalacao, numberMatchRegex } from '../../utils';
import {
  getNumClienteAndMesRefencia,
  getEnergiaEletricaValue,
  getEnergiaSCEESemICMSValue,
  getEnergiaCompensadaGDValue,
  getContribIlumPublicaMunicipalValue,
} from './functions/invoice';
import { getDistribuidora, getNomeInstalacao } from './functions/instalacao';
import { getFaturaSubClasse, getNumeroInstalacao } from './functions/commons';

const extractInvoiceDataFromPDF = async (pdfPath: string): Promise<Invoice> => {
  const dataBuffer = fs.readFileSync(pdfPath);
  const pdfData = await pdf(dataBuffer);
  const data = extractInvoiceData(pdfData.text);
  return data as Invoice;
};

const extractInstalacaoDataFromPDF = async (
  pdfPath: string
): Promise<Instalacao> => {
  const dataBuffer = fs.readFileSync(pdfPath);
  const pdfData = await pdf(dataBuffer);
  const data = await extractInstalacaoData(pdfData.text);
  return data as Instalacao;
};

export { extractInvoiceDataFromPDF, extractInstalacaoDataFromPDF };

const extractInvoiceData = (text: string): Partial<Invoice> => {
  const lines = text.split('\n');
  const data: Partial<Invoice> = {};
  const subclasse = getFaturaSubClasse.bind({ lines })();

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    const numbers = line.match(numberMatchRegex) as RegExpMatchArray;

    const params = {
      lines,
      data,
      line,
      index,
      numbers,
      subclasse,
    };

    [data.mesReferencia, data.numeroCliente] = [
      ...getNumClienteAndMesRefencia.bind({
        ...params,
      })(),
    ];

    params.numbers = params.line.match(numberMatchRegex) as RegExpMatchArray;
    [data.energiaEletricaKWh, data.energiaEletricaValor] = [
      ...getEnergiaEletricaValue.bind({
        ...params,
      })(),
    ];

    [data.energiaSCEEKWh, data.energiaSCEEValor] = [
      ...getEnergiaSCEESemICMSValue.bind({
        ...params,
      })(),
    ];

    [data.energiaCompensadaKWh, data.energiaCompensadaValor] = [
      ...getEnergiaCompensadaGDValue.bind({
        ...params,
      })(),
    ];

    data.contribuIlumPublica = getContribIlumPublicaMunicipalValue.bind({
      ...params,
    })();
  }
  return { ...data };
};

const extractInstalacaoData = async (
  text: string
): Promise<Partial<Instalacao>> => {
  const lines = text.split('\n');
  const data: Partial<Instalacao> = {};
  const subclasse = getFaturaSubClasse.bind({ lines })();

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];

    const params = { data, lines, line, index, subclasse };

    data.nomeInstalacao = data.consumidor = getNomeInstalacao.bind({
      ...params,
    })();

    data.numeroInstalacao = getNumeroInstalacao.bind({
      ...params,
    })();

    data.distribuidora = await getDistribuidora.bind({
      ...params,
    })();
  }

  return { ...data };
};
