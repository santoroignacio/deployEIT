import mongoose from "mongoose";
import { Schema, model } from "mongoose";



const userShema = new Schema({
    nombreUsuario:{
        type: String,
        required: true
    },
    emailUsuario:{
        type: String,
        required: true,
        unique: true
    },
    passwordUsuario:{
        type: String,
        required: true
    },
    ciudadUsuario:{
        type: String
    },
    timestamp:{
        type: Date,
        default: new Date()
    }
}, {versionKey: false})

export default model('Usuario', userShema)