export interface SequelizeConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
  use_env_variable?: string;
}

export type Invoice = {
  numeroCliente: string;
  numeroInstalacao: string;
  mesReferencia: string;
  energiaEletricaKWh: number;
  energiaEletricaValor: number;
  energiaSCEEKWh: number;
  energiaSCEEValor: number;
  energiaCompensadaKWh: number;
  energiaCompensadaValor: number;
  contribuIlumPublica: number;
};

export type Instalacao = {
  nomeInstalacao: string;
  numeroInstalacao: string;
  distribuidora: string;
  consumidor: string;
};

export type PDFHelperBind = {
  lines?: string[];
  data: Partial<Invoice> & Partial<Instalacao>;
  line?: string;
  index?: number;
  numbers?: string[];
  subclasse?: string;
};

export type ExtractParams = {
  lines: string[];
  data: Partial<Invoice>;
  line: string;
  index: number;
  numbers: RegExpMatchArray;
  subclasse?: string;
};
