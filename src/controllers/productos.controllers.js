import Producto from "../models/producto"

export const consultaAgregarProducto = async(req, res) =>{
    try {
      const nuevoProducto = new Producto(req.body);
      await nuevoProducto.save();
      res.status(201).json({
        mensaje: 'El producto fue creado correctamente',
    })         
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: 'Error al intentar crear un producto',
        })
    }
}   