import { Request, Response } from 'express';
import { Instalacao } from '../models';
import { where } from 'sequelize';

export const getAllInstalacao = async (req: Request, res: Response) => {
  try {
    const instalacao = await Instalacao.findAll();
    res.status(200).json(instalacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar faturas.' });
  }
};

export const getAllInstalacaoByID = async (req: Request, res: Response) => {
  try {
    const instalacao = await Instalacao.findAll({
      where: { id: req.params.id },
    });
    res.status(200).json(instalacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar faturas.' });
  }
};
