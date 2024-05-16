import { Router } from "express";
import {
  consultaAgregarProducto,
  consultaListaProductos,
  consultaObtenerProducto,
} from "../controllers/productos.controllers";

const router = Router();

router
  .route("/productos")
  .post(consultaAgregarProducto)
  .get(consultaListaProductos);
router.route("/productos/:id").get(consultaObtenerProducto);

export default router;
