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
      mensaje: "usuario creado",
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

export const login = async (req, res) =>{
  try {
    const { email, password } = req.body;
    let usuario = await Usuario.findOne({email});
    if(!usuario){
      return res.status(404).json({
        mensaje: 'Error, email o contraseña invalidos',
      })
    }
    const passwordValido = bcryp.compareSync(password, usuario.password);
    if(!passwordValido){
      return res.status(404).json({
        mensaje: 'Error, email o contraseña invalidos',
      })
    }
    res.status(200).json({
      mensaje: 'El usuario es correcto',
      nombreUsuario: usuario.nombreUsuario,
      rol: usuario.rol, 
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, email o contraseña invalidos",
    });
  }
}