import { Router } from "express"
import { consultaListaProductos } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos').get(consultaListaProductos)

export default router;