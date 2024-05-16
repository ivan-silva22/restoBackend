import { Router } from "express";
import {
  consultaAgregarUsuario,
  consultaListaUsuarios,
  consultaObtenerUsuario,
} from "../controllers/usuarios.controllers";

const router = Router();

router
  .route("/usuarios")
  .post(consultaAgregarUsuario)
  .get(consultaListaUsuarios);
router.route("/usuarios/:id").get(consultaObtenerUsuario);
export default router;
