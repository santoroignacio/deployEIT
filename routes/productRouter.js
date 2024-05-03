import express from 'express';
const router = express.Router()
import { mostrarProducto, cargarProducto, listarProductos, listarCard, descripcionProducto } from '../controllers/productController.js';

router.get('/', mostrarProducto);
router.post('/', cargarProducto);
router.get('/listar', listarProductos);
router.get('/listarCard',listarCard )
router.get('/cards/:_id', descripcionProducto)

export default router


