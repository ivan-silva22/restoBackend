import Pedido from "../models/pedido";

export const consultaAgregarPedido = async(req, res) =>{
    try {
      const nuevoPedido = new Pedido(req.body);
      await nuevoPedido.save();
      res.status(201).json({
        mensaje: 'El pedido fue creado correctamente',
    })         
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: 'Error al intentar crear un pedido',
        })
    }
}