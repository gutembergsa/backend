import test from 'node:test';
import {
  CEPMatchRegex,
  distribuidorasPorEstado,
  invoiceSubClasse,
  PDFHelperBind,
} from '../../../utils';
import cep from 'cep-promise';

// nomeInstalacao: string;
// numeroInstalacao: string;
// distribuidora: number;
// consumidor: number;

export const getNomeInstalacao = function (this: PDFHelperBind) {
  if (
    this.line?.includes('AutomáticoInstalaçãoVencimentoTotal') &&
    this?.index &&
    this?.lines
  ) {
    const index = this.subclasse === invoiceSubClasse.Comercial ? 3 : 5;
    if (this.index + index < this.lines?.length) {
      const linhaReferencia = this.lines[this.index + index].trim();
      this.data.nomeInstalacao = linhaReferencia.split(/\d+/)[0].trim();
    }
  }
  return this.data.nomeInstalacao;
};

// export const getNumeroInstalacao = function (this: PDFHelperBind) {
//   if (this.line?.includes('Referente a') && this?.index && this?.lines) {
//     const linhaReferencia = this.lines[this.index - 1].trim();
//     this.data.numeroInstalacao = linhaReferencia.split(/\s+/)[1];
//   }
//   return this.data.numeroInstalacao;
// };

export const getDistribuidora = async function (this: PDFHelperBind) {
  if (
    this.line?.includes('AutomáticoInstalaçãoVencimentoTotal') &&
    this?.index &&
    this?.lines
  ) {
    const index = this.subclasse === invoiceSubClasse.Comercial ? 6 : 8;

    if (this.index + 1 < this.lines?.length) {
      const linhaReferencia = this.lines[this.index + index].trim();

      const estado = linhaReferencia
        .split(',')[1]
        .trim() as keyof typeof distribuidorasPorEstado;
      this.data.distribuidora = distribuidorasPorEstado[estado];
    }
  }
  return this.data.distribuidora;
};
