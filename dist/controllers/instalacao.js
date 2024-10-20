"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllInstalacaoByID = exports.getAllInstalacao = void 0;
const models_1 = require("../models");
const getAllInstalacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const instalacao = yield models_1.Instalacao.findAll();
        res.status(200).json(instalacao);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar faturas.' });
    }
});
exports.getAllInstalacao = getAllInstalacao;
const getAllInstalacaoByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const instalacao = yield models_1.Instalacao.findAll({
            where: { id: req.params.id },
        });
        res.status(200).json(instalacao);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar faturas.' });
    }
});
exports.getAllInstalacaoByID = getAllInstalacaoByID;
//# sourceMappingURL=instalacao.js.map