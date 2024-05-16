import Usuario from '../models/usuario';

export const consultaAgregarUsuario = async(req, res)=>{
    try {
        const nuevoUsuario = await Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json({
            mensaje: 'El usuario fue creado correctamente',
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear el usuario',
        });
    }
}

export const consultaListaUsuarios = async(req, res)=>{
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar obtener los usuarios',
        })
    }
}