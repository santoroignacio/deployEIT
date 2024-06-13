import express from 'express';
const router = express.Router()
import { mostrarProducto, cargarProducto, listarProductos, listarCard, descripcionProducto, eliminarProducto, formularioActualizar, actualizarProducto } from '../controllers/productController.js';
import  verifyToken  from '../services/verifyToken.js';

router.get('/',  mostrarProducto);
router.post('/', cargarProducto);
router.get('/listar', listarProductos);
router.get('/listarCard',listarCard )
router.get('/cards/:_id', descripcionProducto)
router.post('/eliminar/:_id', eliminarProducto)
router.get('/actualizar/:_id', formularioActualizar)
router.post('/actualizar/:_id', actualizarProducto)

export default router



