import express, { Request, Response } from 'express';
import cors from 'cors';
import { invoiceRouter, instalacaoRouter } from '../router';

const app = express();

app.use(express.json());
app.use(cors());

app.use(invoiceRouter);
app.use(instalacaoRouter);

export default app;
