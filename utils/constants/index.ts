export const DB_URL = 'postgres://postgres:gutemberg@localhost:5432/lumi';
export const numberMatchRegex = /\d+([.,]\d+)?/g;
export const CEPMatchRegex = /^\d{2}\d{3}[-]\d{3}$/g;

export const distribuidorasPorEstado = {
  MG: 'CEMIG',
};

export const invoiceSubClasse = {
  Comercial: 'Comercial',
  Outros: 'Outros',
};
