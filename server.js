import app from './index.js'
import dotenv from 'dotenv'
import conectarDB from './db.js'
dotenv.config()
const PORT = process.env.PORT || 1234


const server = app.listen(PORT)/* , ()=>{
    console.log(`Servidor escuchando en http://127.0.0.1:${PORT}`)
});
 */
server.on('listening', ()=>{
    console.log(`Servidor escuchando en http://127.0.0.1:${PORT}`)
});

server.on('error', (error)=>{
    console.log(`Error en el servidor: ${error}`)
});



