import { Router } from "express";
import {
  consultaAgregarUsuario,
  consultaListaUsuarios,
  consultaObtenerUsuario,
  login,
} from "../controllers/usuarios.controllers";
import validarUsuario from "../helpers/validarUsuario";
import validarLogin from "../helpers/validarLogin";

const router = Router();

router
  .route("/usuarios")
  .get(consultaListaUsuarios);
router.route("/registro").post(validarUsuario, consultaAgregarUsuario)
router.route("/usuario/:id").get(consultaObtenerUsuario);
router.route("/login").post(validarLogin, login)
export default router;
