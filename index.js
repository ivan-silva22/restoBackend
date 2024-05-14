import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import morgan from "morgan";

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
