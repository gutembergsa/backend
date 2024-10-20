import express from 'express';
import { invoiceController } from '../controllers';

const router = express.Router();

router.route('/api/invoices').get(invoiceController.getAllInvoices);
router.route('/api/invoices/:id').get(invoiceController.getAllInvoicesByID);
router
  .route('/api/invoices/cliente/:numeroCliente')
  .get(invoiceController.getAllInvoicesByNumeroCliente);
router
  .route('/api/invoices/instalacao/:numeroInstalacao')
  .get(invoiceController.getAllInvoicesByNumeroInstalacao);

export default router;
