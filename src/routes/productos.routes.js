import { Router } from "express";
import {
  consultaAgregarProducto,
  consultaBorrarProducto,
  consultaEditarProducto,
  consultaListaProductos,
  consultaObtenerProducto,
} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validarProducto";

const router = Router();

router
  .route("/productos")
  .post(validarProducto ,consultaAgregarProducto)
  .get(consultaListaProductos);
router
  .route("/productos/:id")
  .get(consultaObtenerProducto)
  .delete(consultaBorrarProducto)
  .put(consultaEditarProducto);

export default router;
