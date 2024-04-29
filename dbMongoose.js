import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URL_COMPASS_MONGOOSE = process.env.MONGO_URL_COMPASS_MONGOOSE


/* export const conectarMongoose = mongoose.connect(MONGO_URL_COMPASS)
     .then( ()=>{
        console.log(`Se conectó a la base de datos con Mongoose: ${MONGO_URL_COMPASS}`)
     },
     Error =>{
        console.log(`No se conectó , error: ${Error}`)
     }
    ) */
    
    export const conectarMongoose = async()=>{
        try {
            await mongoose.connect(MONGO_URL_COMPASS_MONGOOSE)
            console.log(`Se conectó a la base de datos con Mongoose: ${MONGO_URL_COMPASS_MONGOOSE}`)
        } catch (error) {
            console.log(`No se conectó , error: ${error}`)
        }
    }

    conectarMongoose()