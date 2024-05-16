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

export const consultaListaPedidos = async(req, res)=>{
    try {
        const pedidos = await Pedido.find();
        res.status(200).json(pedidos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar obtener los pedidos',
        })
    }
}