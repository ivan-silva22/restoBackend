import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import './src/database/dbConnection';
import productosRouter from "./src/routes/productos.routes";
import usuariosRouter from "./src/routes/usuarios.routes";
import pedidosRouter from "./src/routes/pedidos.routes";


dotenv.config();

const app = express();

app.set('PORT', process.env.PORT || 4000);

app.listen(app.get('PORT'), ()=>{
    console.log('estoy en el puerto '+ app.get('PORT'));
});

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'/public')))

app.use("/pizzeria-sabores", productosRouter);
app.use("/pizzeria-sabores/auth", usuariosRouter);
app.use("/pizzeria-sabores/orden", pedidosRouter);