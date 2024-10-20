import { invoiceSubClasse, PDFHelperBind } from '../../../utils';

export const getFaturaSubClasse = function (this: { lines: string[] }) {
  const indexReferencia = this.lines?.findIndex((value) =>
    value.includes('Subclasse')
  );

  const isTruckedComercialType = this.lines[indexReferencia + 1].includes(
    invoiceSubClasse.Comercial + invoiceSubClasse.Comercial
  );

  const subClasse = isTruckedComercialType
    ? invoiceSubClasse.Comercial
    : this.lines[indexReferencia + 1].split(/\s+/)[1];

  return subClasse;
};

export const getNumeroInstalacao = function (this: PDFHelperBind) {
  if (this.line?.includes('Referente a') && this?.index && this?.lines) {
    const linhaReferencia = this.lines[this.index - 1].trim();
    this.data.numeroInstalacao = linhaReferencia.split(/\s+/)[1];
  }
  return this.data.numeroInstalacao;
};
