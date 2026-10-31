import { Router } from "express";
import pedidoController from "../controllers/pedidoController.js";

const router = Router()

router.get('/pedidos', pedidoController.listar)
router.get('/pedidos/:id', pedidoController.buscarPorId)

router.post('/pedidos', pedidoController.criar)

router.patch('/pedidos/:id', pedidoController.atualizar)

export default router