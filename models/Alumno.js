import mongoose from 'mongoose'

const Schema = mongoose.Schema

 const alumnoSchema = new Schema({
    nombre: String,
    edad: Number
}, {versionKey: false})

const Alumno = mongoose.model('alumnos', alumnoSchema)

//module.exports = Alumno

export default Alumno

