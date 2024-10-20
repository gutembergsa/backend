"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
router.route('/api/instalacao').get(controllers_1.instalacaoController.getAllInstalacao);
router
    .route('/api/instalacao/:id')
    .get(controllers_1.instalacaoController.getAllInstalacaoByID);
exports.default = router;
//# sourceMappingURL=instalacao.js.map