import express from 'express';
const router = express.Router()
import { mostrarProducto, cargarProducto, listarProductos } from '../controllers/productController.js';

router.get('/', mostrarProducto);
router.post('/', cargarProducto);
router.get('/listar', listarProductos);

export default router

