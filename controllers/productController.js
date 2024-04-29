import Producto from '../models/productModels.js'

export const mostrarProducto = (req, res) => {
  res.render('producto')
}

export const cargarProducto = async (req, res) => {
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

export const listarProductos = async (req, res) => {
  try {
    const lista = await Producto.find()
    res.json(lista)
  } catch (error) {
    console.log('Error', error)
  }
}