import { PDFHelperBind } from '../../../utils';

export const getNumClienteAndMesRefencia = function (this: PDFHelperBind) {
  if (this.line?.includes('Referente a') && this?.index && this?.lines) {
    if (this.index + 1 < this.lines?.length) {
      const linhaReferencia1 = this.lines[this.index + 1].trim();
      const linhaReferencia2 = this.lines[this.index - 1].trim();

      this.data.mesReferencia = linhaReferencia1.split(/\s+/)[0];
      this.data.numeroCliente = linhaReferencia2.split(/\s+/)[0];
      this.data.numeroInstalacao = linhaReferencia2.split(/\s+/)[1];
    }
  }

  return [this.data.mesReferencia, this.data.numeroCliente];
};

export const getEnergiaEletricaValue = function (this: PDFHelperBind) {
  if (this.line?.includes('Energia ElétricakWh') && this.numbers) {
    this.data.energiaEletricaKWh = Number(this.numbers[0]);
    this.data.energiaEletricaValor = parseFloat(
      this.numbers[2].replace(',', '.')
    );
  }
  return [this.data.energiaEletricaKWh, this.data.energiaEletricaValor];
};

export const getEnergiaSCEESemICMSValue = function (this: PDFHelperBind) {
  if (this.line?.includes('Energia SCEE s/ ICMS') && this.numbers) {
    this.data.energiaSCEEKWh = Number(this.numbers[0]);
    this.data.energiaSCEEValor = parseFloat(this.numbers[2].replace(',', '.'));
  }
  return [this.data.energiaSCEEKWh, this.data.energiaSCEEValor];
};

export const getEnergiaCompensadaGDValue = function (this: PDFHelperBind) {
  if (this.line?.includes('Energia compensada GD I') && this.numbers) {
    this.data.energiaCompensadaKWh = Number(this.numbers[0]);
    this.data.energiaCompensadaValor = parseFloat(
      this.numbers[2].replace(',', '.')
    );
  }
  return [this.data.energiaCompensadaKWh, this.data.energiaCompensadaValor];
};

export const getContribIlumPublicaMunicipalValue = function (
  this: PDFHelperBind
) {
  if (this.line?.includes('Contrib Ilum Publica Municipal')) {
    const match = this.line.match(/([\d.,]+)/);
    if (match) {
      this.data.contribuIlumPublica = parseFloat(match[0].replace(',', '.'));
    }
  }
  return this.data.contribuIlumPublica;
};
