import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import veterinarioRoutes from './routes/veterinarioRoutes.js';
import pacienteRoutes from './routes/pacienteRoutes.js';
import cors from 'cors';

const app = express();

// Habilita Leer datos enviado por post en json
app.use(express.json());


dotenv.config()

conectarDB()

const dominiosPermitidos = [process.env.FRONTEND_URL]

const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1 ){
            callback(null, true)
        }else{
            callback(new Error('No permitido'))
        }
    }
}

app.use(cors({
    origin:'*'
}))

//Rutas
app.use('/api/veterinarios', veterinarioRoutes);

app.use('/api/pacientes', pacienteRoutes)
    




const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
})