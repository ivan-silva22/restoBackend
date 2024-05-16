import { Router } from "express"
import  {consultaAgregarPedido, consultaBorrarPedido, consultaListaPedidos } from "../controllers/pedidos.controllers";

const router = Router();

router.route('/pedidos').post(consultaAgregarPedido).get(consultaListaPedidos);
router.route('/pedidos/:id').delete(consultaBorrarPedido);


export default router;