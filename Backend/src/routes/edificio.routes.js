import { Router } from "express";
import { getEdificios, getEdificioById, postEdificio, putEdificio, deleteEdificio } from "../controllers/edificio.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('', getEdificios)
router.get('/:id_edificio', getEdificioById);
router.post('', verifyToken, verifyRoles(['administrador']), postEdificio)
router.put('/:id_edificio', verifyToken, verifyRoles(['administrador']), putEdificio)
router.delete('/:id_edificio', verifyToken, verifyRoles(['administrador']), deleteEdificio)

export default router