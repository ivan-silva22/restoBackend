import { Router } from "express"
import  {consultaAgregarPedido } from "../controllers/pedidos.controllers";

const router = Router();

router.route('/pedidos').post(consultaAgregarPedido);


export default router;