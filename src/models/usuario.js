import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
    nombreUsuario:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    rol:{
        type: String,
    }
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;