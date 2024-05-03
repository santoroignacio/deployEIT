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
    const listaProductos = await Producto.find()
    res.render('listarTabla',{
      listaProductos
    })
  } catch (error) {
    console.log('Error', error)
  }
}

export const listarCard = async (req, res) =>{
  try {
    const cards = await Producto.find()
    res.render('listarCard',{
      cards
    })
  } catch (error) {
    console.log('Error:', error)
  }
}

export const descripcionProducto = async(req, res)=>{
  const id = req.params._id
  try {
    const producto = await Producto.findById({_id:id})
    res.render('descripcionProducto',{
      producto
    })
  } catch (error) {
    console.log('Error:', error)
  }
}
