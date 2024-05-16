import { Router } from "express";
import {
  consultaAgregarUsuario,
  consultaListaUsuarios,
  consultaObtenerUsuario,
} from "../controllers/usuarios.controllers";
import validarUsuario from "../helpers/validarUsuario";

const router = Router();

router
  .route("/usuarios")
  .post(validarUsuario ,consultaAgregarUsuario)
  .get(consultaListaUsuarios);
router.route("/usuarios/:id").get(consultaObtenerUsuario);
export default router;
