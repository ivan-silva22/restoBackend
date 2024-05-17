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

export const consultaEditarPedido = async(req, res)=>{
    try {
        await Pedido.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'El estado del pedido fue actualizado correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar editar el estado del pedido',
        });
    }
}

export const consultaBorrarPedido = async(req, res)=>{
    try {
        const pedidoABorrar = await Pedido.findById(req.params.id);
        if(!pedidoABorrar){
            return res.status(404).json({
                mensaje: "El pedido que querés borrar no fue encontrado.",
            });
        }
        await Pedido.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'El pedido fue eliminado correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar borrar el pedido',
        })
    }
}