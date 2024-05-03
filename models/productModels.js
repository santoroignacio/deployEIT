import mongoose from "mongoose";
import { Schema, model } from "mongoose";



const productShema = new Schema({
    nombreProducto:{
        type: String,
        required: true
    },
    precioProducto:{
        type: Number,
        required: true
    },
    imagenProducto:{
        type: String,
        required: true
    },
    stockProducto:{
        type: Number,
        required: true
    },
    timestamp:{
        type: Date,
        default: new Date()
    }
}, {versionKey: false})

export default model('productos', productShema)