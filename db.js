import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const db = mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Conectado a MongoDB con Mongoose'))
    .catch((e) => console.log('El error de conexion es:', e))

//module.exports = db
 export default db

/* const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
dotenv.config()

MONGODB_URL = process.env.MONGODB_URL
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
module.exports = conectarDB

 */