import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarPedido = [
  check("estado")
    .notEmpty()
    .withMessage("El estado es un dato obligatorio")
    .isIn(["Pendiente", "Entregado", "Cancelado"]),
    (req, res, next) =>{
        resultadoValidacion(req, res, next);
    }
];

export default validarPedido;
