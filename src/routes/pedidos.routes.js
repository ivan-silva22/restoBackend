import { Router } from "express";
import {
  consultaAgregarPedido,
  consultaBorrarPedido,
  consultaEditarPedido,
  consultaListaPedidos,
} from "../controllers/pedidos.controllers";
import validarPedido from "../helpers/validarPedido";

const router = Router();

router.route("/pedidos").post(validarPedido ,consultaAgregarPedido).get(consultaListaPedidos);
router
  .route("/pedidos/:id")
  .delete(consultaBorrarPedido)
  .put(consultaEditarPedido);

export default router;
