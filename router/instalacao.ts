import express from 'express';
import { instalacaoController } from '../controllers';

const router = express.Router();

router.route('/api/instalacao').get(instalacaoController.getAllInstalacao);
router
  .route('/api/instalacao/:id')
  .get(instalacaoController.getAllInstalacaoByID);

export default router;
