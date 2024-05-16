import { Router } from "express"
import { consultaAgregarUsuario } from "../controllers/usuarios.controllers";

const router = Router();

router.route('/usuarios').post(consultaAgregarUsuario);

export default router;