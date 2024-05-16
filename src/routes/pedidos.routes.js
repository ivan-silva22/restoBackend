import { Router } from "express"
import  {consultaAgregarPedido, consultaListaPedidos } from "../controllers/pedidos.controllers";

const router = Router();

router.route('/pedidos').post(consultaAgregarPedido).get(consultaListaPedidos);


export default router;