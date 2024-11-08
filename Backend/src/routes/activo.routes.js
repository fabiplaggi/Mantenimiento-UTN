import { Router } from "express";
import { getActivos, getActivoById, postActivo, putActivo, deleteActivo } from "../controllers/activo.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('', verifyToken, getActivos)
router.get('/:id_activo', verifyToken, getActivoById);
router.post('', verifyToken, verifyRoles(['administrador']), postActivo)
router.put('/:id_activo', verifyToken, verifyRoles(['administrador']), putActivo)
router.delete('/:id_activo', verifyToken, verifyRoles(['administrador']), deleteActivo)

export default router