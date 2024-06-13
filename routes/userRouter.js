import express from 'express';
const router = express.Router()
import { formularioUsuario, registrarUsuario, formularioLogin, loginUsuario, pruebaToken } from '../controllers/userController.js';
import { check } from 'express-validator';
import verifyToken from '../services/verifyToken.js';

router.get('/registrar', formularioUsuario);
router.post('/registrar', [
    check('nombreUsuario').notEmpty().isString().isLength({ min: 8 }),
    check('emailUsuario').notEmpty().isEmail(),
    check('passwordUsuario').notEmpty()],
    registrarUsuario);

router.get('/login', formularioLogin)
router.post('/login', [
    check('emailUsuario').notEmpty().isEmail(),
    check('passwordUsuario').notEmpty()],
    loginUsuario)

router.get('/admin',verifyToken, pruebaToken)    


export default router



