/* import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const db = mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Conectado a MongoDB con Mongoose'))
    .catch((e) => console.log('El error de conexion es:', e)) */

//module.exports = db
 //export default db

import {MongoClient} from 'mongodb';
import dotenv from 'dotenv'
dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL
const client = new MongoClient(MONGODB_URL);

const conectarDB = async() =>{
    try {
        await client.connect();
        console.log('Conectados a la base de datos')
        const db = client.db('prueba')
       // db.collection('alumnos').insertOne({'_id':11, 'nombre': 'Nacho'})
    } catch (error) {
        console.log(`Error en la conexion: ${error}`)
    }
}

conectarDB()
export default conectarDB
/* module.exports = conectarDB */

