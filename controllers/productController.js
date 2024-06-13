import Producto from '../models/productModels.js';
import { request, response } from 'express';
import verifyToken from '../services/verifyToken.js';
import jwt from 'jsonwebtoken';

export const mostrarProducto = (req = request, res = response) => {
  res.render('producto')
}

export const cargarProducto = async (req = request, res = response) => {
  /*  const {
      nombreProducto,
      precioProducto,
      imagenProducto,
      stockProducto
   } = req.body

   const producto = {
     nombreProducto,
     precioProducto,
     imagenProducto,
     stockProducto
   }
   console.log('Producto', producto) */

  const producto = new Producto({
    nombreProducto: req.body.nombreProducto,
    precioProducto: req.body.precioProducto,
    imagenProducto: req.body.imagenProducto,
    stockProducto: req.body.stockProducto
  })

  try {
    const guardado = await Producto.create(producto)
    res.json(guardado)
  } catch (error) {
    res.send('NO se pudo Guardar ------ERROR')
  }
}

export const listarProductos = async (req = request, res = response) => {

  const cookieToken = req.cookies.xToken
  console.log('cookieToken:', cookieToken)


  try {
     await jwt.verify(cookieToken, process.env.TOKEN_SECRET)
    try {
      const listaProductos = await Producto.find()
      return res.render('listarTabla', {
        listaProductos
      })
    } catch (error) {
      console.log('Nuestros ingenieros están trabajando en el problema', error)
      return res.render('error',{
        mensaje: 'Nuestros ingenieros están trabajando en el problema'
      })
    }
  } catch (error) {
    return res.render('error', {
      mensaje: 'No tiene permisos para ver esta pagina'
    })
  }


}

export const listarCard = async (req = request, res = response) => {
  try {
    const cards = await Producto.find()
    res.render('listarCard', {
      cards
    })
  } catch (error) {
    console.log('Error:', error)
  }
}

export const descripcionProducto = async (req = request, res = response) => {
  const id = req.params._id
  try {
    const producto = await Producto.findById({ _id: id })
    res.render('descripcionProducto', {
      producto
    })
  } catch (error) {
    console.log('Error:', error)
  }
}

export const eliminarProducto = async (req = request, res = response) => {
  const id = req.params._id
  try {
    const productoEliminado = await Producto.findByIdAndDelete({ _id: id })
    console.log('Producto eliminado:', productoEliminado)
    const cards = await Producto.find()
    res.render('listarCard', {
      cards
    })

  } catch (error) {
    console.log('Error:', error)
  }
}

export const formularioActualizar = async (req = request, res = response) => {
  const id = req.params._id
  try {
    const productoBuscado = await Producto.findById({ _id: id })
    console.log('Producto buscado:', productoBuscado)
    res.render('FormularioActualizar', {
      productoBuscado
    })
  } catch (error) {
    console.log('Error:', error)
  }
}

export const actualizarProducto = async (req = request, res = response) => {

  const productoActualizado = {
    nombreProducto: req.body.nombreProducto,
    precioProducto: req.body.precioProducto,
    imagenProducto: req.body.imagenProducto,
    stockProducto: req.body.stockProducto
  }

  const id = req.params._id

  try {
    await Producto.findByIdAndUpdate({ _id: id }, productoActualizado)
    const cards = await Producto.find()
    res.render('listarCard', {
      cards
    })
  } catch (error) {
    console.log('Error:', error)
  }

}