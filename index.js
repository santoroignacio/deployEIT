import express from "express"
import path from 'node:path'
import hbs from 'hbs'
import productRouter from './routes/productRouter.js'
import userRouter from './routes/userRouter.js'
import cors from 'cors'
import cookieParser from "cookie-parser"
import session from "express-session"
import MongoStore from "connect-mongo"
import bodyParser from "body-parser"
import mongoose from 'mongoose'

import dotenv from 'dotenv'
import { cookie } from "express-validator"
dotenv.config()

const PORT = process.env.PORT || 1234
const miClave = process.env.SECRET_SESSION

const app = express()
//middlewares
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.static('/public'))


//session con mongo-connect

app.use(session({
    secret: miClave,
    saveUninitialized: false, // don't create session until something stored
    resave: true, //don't save session if unmodified
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL_COMPASS_MONGOOSE,
      /* touchAfter: 24 * 3600 */ // time period in seconds
    }),
    cookie:{
        maxAge: 60000
    }
  }));

//rutas
app.use('/producto', productRouter )
app.use('/usuario', userRouter )


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



















