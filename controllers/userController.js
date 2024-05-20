import { request, response } from "express";
import User from '../models/userModels.js'
import { validationResult } from "express-validator";
import bcrypt from 'bcrypt';
import enviarEmail from "../services/mailResponse.js";

export const formularioUsuario = (req=request, res=response)=>{
    return res.render('registrarUsuario')
}

export const registrarUsuario = async(req=request, res=response)=>{
     //ver si los datos que vienen del front son validos
    const errores = validationResult(req)

    if (!errores.isEmpty()){
       return res.render('registrarUsuario',{
            mensaje:'Faltan Datos'
        })
    }
    
   
    const user = new User({
        nombreUsuario:req.body.nombreUsuario,
        emailUsuario: req.body.emailUsuario,
        passwordUsuario:req.body.passwordUsuario,
        ciudadUsuario: req.body.ciudadUsuario
      })

      //ver si el email ya existe
      const emailExiste = await User.find({emailUsuario : user.emailUsuario})

      if (emailExiste.length > 0){
        return res.json({mensaje: 'Ese email ya fue registrado anteriormente'})
      }

      //encriptar contraseña
      const salt = await bcrypt.genSalt(10)
      console.log(salt)
      user.passwordUsuario = await bcrypt.hash(req.body.passwordUsuario, salt)
      console.log(user.passwordUsuario)
      
      //registro el usuario

    try {
        const usuario = await User.create(user)
        await enviarEmail(req.body.emailUsuario, req.body.nombreUsuario)
        return res.render('loginUsuario')
        //res.json(usuario)
    } catch (error) {
        return res.render('error',{
            mensaje: 'El usuario no se pudo registrar'
        })
    }
    
}

export const formularioLogin = (req=request, res=response)=>{
    return res.render('loginUsuario')
}

export const loginUsuario = async (req=request, res=response)=>{
//validar datos del front
    const errores = validationResult(req)

    if (!errores.isEmpty()){
        return res.render('loginUsuario',{
             mensaje:'Faltan Datos en el login'
         })
     }

     //ver si email existe para ingresar

     const {
        emailUsuario,
        passwordUsuario
     } = req.body

     const usuarioExiste = await User.find({emailUsuario: emailUsuario})
     console.log('usuario existe:',usuarioExiste)

     if(!usuarioExiste[0]){
        return res.render('registrarUsuario', {
            mensaje: 'Antes debe registrarse'
        })
     }

     //verificar si la contraseña es la correcta, desencriptar

    
      try {
        const passwordCorrecto = await bcrypt.compare(passwordUsuario,usuarioExiste[0].passwordUsuario)
        console.log('password correcto:', passwordCorrecto)

        if(!passwordCorrecto){
           return res.render('loginUsuario', {
               mensaje: 'El usuario o la contraseña son incorrectos'
           })
        }

        return res.render('index')
      } catch (error) {
        console.log('Error:', error)
      }

}