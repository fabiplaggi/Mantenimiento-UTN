import { Router } from "express";
import { getUsuarios, getUsuarioById, postUsuarios, putUsuario, deleteUsuario } from "../controllers/usuario.controllers.js";
import { verifyToken, verifyRoles } from '../middlewares/auth.middleware.js'

const router = Router()

router.get('', verifyToken, verifyRoles(['administrador']), getUsuarios);
router.get('/:id_usuario', verifyToken, verifyRoles(['administrador']), getUsuarioById);
router.post('', verifyToken, verifyRoles(['administrador']), postUsuarios);
router.put('/:id_usuario', verifyToken, verifyRoles(['administrador']), putUsuario);
router.delete('/:id_usuario', verifyToken, verifyRoles(['administrador']), deleteUsuario);

export default router