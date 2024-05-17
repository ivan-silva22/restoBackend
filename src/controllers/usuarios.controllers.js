import Usuario from "../models/usuario";
import bcryp from "bcrypt";

export const consultaAgregarUsuario = async (req, res) => {
  try {
    const { email, password, nombreUsuario } = req.body;
    let usuarioEmail = await Usuario.findOne({ email });
    if (usuarioEmail) {
      return res.status(400).json({
        mensaje: "El email ya existe",
      });
    }
    let usuarioNombre = await Usuario.findOne({ nombreUsuario });
    if (usuarioNombre) {
      return res.status(400).json({
        mensaje: "Ya existe un usuario con ese nombre",
      });
    }
    const nuevoUsuario = await Usuario(req.body);
    const salt = bcryp.genSaltSync(10);
    nuevoUsuario.password = bcryp.hashSync(password, salt);
    await nuevoUsuario.save();
    res.status(201).json({
      mensaje: "El usuario fue creado correctamente",
      nombreUsuario: nuevoUsuario.nombreUsuario,
      rol: nuevoUsuario.rol,
      _id: nuevoUsuario._id
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear el usuario",
    });
  }
};

export const consultaListaUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar obtener los usuarios",
    });
  }
};

export const consultaObtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar obtener el usuario",
    });
  }
};
