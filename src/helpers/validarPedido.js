import { check } from "express-validator";

const validarPedido = [
  check("estado")
    .notEmpty()
    .withMessage("El estado es un dato obligatorio")
    .isIn(["Pendiente", "Entregado", "Cancelado"]),
];

export default validarPedido;
