import { Request, Response } from 'express';
import { Invoice } from '../models';

export const getAllInvoices = async (req: Request, res: Response) => {
  try {
    const invoices = await Invoice.findAll();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar faturas.' });
  }
};

export const getAllInvoicesByID = async (req: Request, res: Response) => {
  try {
    const invoices = await Invoice.findAll({ where: { id: req.params.id } });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar faturas.' });
  }
};

export const getAllInvoicesByNumeroCliente = async (
  req: Request,
  res: Response
) => {
  try {
    const invoices = await Invoice.findAll({
      where: { numeroCliente: req.params.numeroCliente },
    });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar faturas.' });
  }
};

export const getAllInvoicesByNumeroInstalacao = async (
  req: Request,
  res: Response
) => {
  try {
    const invoices = await Invoice.findAll({
      where: { numeroInstalacao: req.params.numeroInstalacao },
    });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar faturas.' });
  }
};
