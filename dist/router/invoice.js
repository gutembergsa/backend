"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
router.route('/api/invoices').get(controllers_1.invoiceController.getAllInvoices);
router.route('/api/invoices/:id').get(controllers_1.invoiceController.getAllInvoicesByID);
router
    .route('/api/invoices/cliente/:numeroCliente')
    .get(controllers_1.invoiceController.getAllInvoicesByNumeroCliente);
router
    .route('/api/invoices/instalacao/:numeroInstalacao')
    .get(controllers_1.invoiceController.getAllInvoicesByNumeroInstalacao);
exports.default = router;
//# sourceMappingURL=invoice.js.map