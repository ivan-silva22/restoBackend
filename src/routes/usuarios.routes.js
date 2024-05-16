import { Router } from "express"
import { consultaAgregarUsuario, consultaListaUsuarios } from "../controllers/usuarios.controllers";

const router = Router();

router.route('/usuarios').post(consultaAgregarUsuario).get(consultaListaUsuarios);

export default router;