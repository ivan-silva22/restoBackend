import { Router } from "express"
import { consultaAgregarProducto } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos').post(consultaAgregarProducto)

export default router;