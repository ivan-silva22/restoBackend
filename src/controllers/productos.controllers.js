import { validationResult } from "express-validator";
import Producto from "../models/producto"

export const consultaAgregarProducto = async(req, res) =>{
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array(),
        })
      }
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

export const consultaListaProductos = async(req, res)=>{
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar obtener los productos',
        })
    }
}

export const consultaObtenerProducto = async(req, res)=>{
    try {
        const producto = await Producto.findById(req.params.id);
        res.status(200).json(producto);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar obtener el producto',
        })
    }
}

export const consultaBorrarProducto = async(req, res)=>{
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'El producto fue eliminado correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar borrar el producto',
        })
    }
}

export const consultaEditarProducto = async(req, res)=>{
    try {
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'El producto fue actualizado correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar editar el producto',
        });
    }
}

