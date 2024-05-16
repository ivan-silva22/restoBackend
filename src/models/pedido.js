import mongoose, {Schema} from "mongoose";

const pedidoSchema = Schema({
    nombreUsuario: {
        type: String,
        required: true,
    },
    fecha: {
        type: String,
        required: true,
    },
    productos: {
        type: Array,
        required: true,
    },
    estado:{
        type: String,
        required: true,
    },
    total:{
        type: Number,
        required: true,
    }
});

const Pedido = mongoose.model('pedido', pedidoSchema);

export default Pedido;