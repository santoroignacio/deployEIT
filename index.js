import express from "express"
import path from 'node:path'
import hbs from 'hbs'
import alumnoRouter from './routes/alumnoRouter.js'
import productRouter from './routes/productRouter.js'

import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 1234

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('/public'))
app.use('/alumno', alumnoRouter)
app.use('/producto', productRouter )

app.set('view engine', 'hbs')
app.set('views','views')
hbs.registerPartials('views/partials')

app.get('/', (req, res)=>{
    res.render('index')
})
app.get('*', (req, res)=>{
    res.render('error')
})


/* mongoose.connect(process.env.MONGODB_URL)
.then(()=> {
    app.listen(PORT, ()=>{
    console.log(`Conectado a DB y Servidor escuchando en http://127.0.0.1:${PORT}`)
})
})
.catch((e)=>{
    console.log('El error de conexion es:', e)
}) */

/* module.exports = db */
export default app



















