import { Router } from "express";
import {
  consultaAgregarPedido,
  consultaBorrarPedido,
  consultaEditarPedido,
  consultaListaPedidos,
} from "../controllers/pedidos.controllers";

const router = Router();

router.route("/pedidos").post(consultaAgregarPedido).get(consultaListaPedidos);
router
  .route("/pedidos/:id")
  .delete(consultaBorrarPedido)
  .put(consultaEditarPedido);

export default router;
