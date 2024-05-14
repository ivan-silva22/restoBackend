import mongoose from "mongoose";

const cadenaConexion = 'mongodb://localhost:27017/dbpizzasabores';

mongoose.connect(cadenaConexion);

const datosConexion = mongoose.connection;

datosConexion.once('open', ()=>{
    console.log('base de datos conectada');
})