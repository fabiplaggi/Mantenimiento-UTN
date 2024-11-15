import { Router } from "express";
import {
    getUsuarios,
    getUsuarioById,
    postUsuarios,
    putUsuario,
    deleteUsuario,
    getUsuarioByUsename
} from "../controllers/usuario.controllers.js";
import { verifyToken, verifyRoles } from '../middlewares/auth.middleware.js'

const router = Router()

router.get('', getUsuarios);
router.get('/:id_usuario', getUsuarioById);
router.get('/nombre/:username', getUsuarioByUsename)
router.post('', postUsuarios);
router.put('/:id_usuario', putUsuario);
router.delete('/:id_usuario', deleteUsuario);

export default router