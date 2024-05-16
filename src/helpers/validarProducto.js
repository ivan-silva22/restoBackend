import { check } from "express-validator";

const validarProducto = [
  check("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es un dato obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage(
      "El nombre del producto debe contener entre 2 y 100 caracteres"
    ),
  check("descripcion")
    .notEmpty()
    .withMessage("La descripcion es un dato obligatorio")
    .isLength({ min: 2, max: 500 })
    .withMessage("La descripcion debe contener entre 2 y 500 caracteres"),
  check("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un valor numerico")
    .custom((dato) => {
      if (dato >= 1 && dato <= 10000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre 1 y 10000");
      }
    }),
  check("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/^.*\.(png|jpg|jpeg)$/)
    .withMessage("La imagen debe ser una url valida png | jpg | jpeg"),
  check("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn(["Clasicas", "Vegetariana", "Vegana", "Postres", "Bebidas"])
    .withMessage('La categoria debe ser una opcion valida'),
];

export default validarProducto;