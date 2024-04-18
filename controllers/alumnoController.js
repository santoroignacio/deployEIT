import Alumno from '../models/Alumno.js'
import mongoose from 'mongoose'


const mostrar = (req, res) => {
    res.send('Guardando')
}

const listar = async (req, res) =>{
    try {
        const data = await Alumno.find()
        console.log('Data:', data)
        res.send(data)
    } catch (error) {
        return res.send('ERROR', error)
    }

    //mongoose.disconnect()
   
}

export {
    mostrar,
    listar
}
