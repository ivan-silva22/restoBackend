import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    descripcion:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 500,
    },
    precio:{
        type: Number,
        required: true,
        min: 1,
        max: 10000,
    },
    imagen:{
        type: String,
        required: true,
    },
    categoria:{
        type: String,
        required: true,
    }
})

const Producto = mongoose.model('producto', productoSchema);

export default Producto;