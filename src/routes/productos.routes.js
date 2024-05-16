import { Router } from "express";
import {
  consultaAgregarProducto,
  consultaBorrarProducto,
  consultaListaProductos,
  consultaObtenerProducto,
} from "../controllers/productos.controllers";

const router = Router();

router
  .route("/productos")
  .post(consultaAgregarProducto)
  .get(consultaListaProductos);
router
  .route("/productos/:id")
  .get(consultaObtenerProducto)
  .delete(consultaBorrarProducto);

export default router;
