import express from 'express';
const router = express.Router();
import {mostrar, listar} from '../controllers/alumnoController.js'

router.get('/', mostrar)
router.get('/lista', listar)

export default router