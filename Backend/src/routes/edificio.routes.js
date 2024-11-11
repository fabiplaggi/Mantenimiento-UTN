import { Router } from "express";
import {
    getEdificios,
    getEdificioById,
    getEdificioByName,
    postEdificio,
    putEdificio,
    deleteEdificio
} from "../controllers/edificio.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('', verifyToken, getEdificios)
router.get('/:id_edificio', verifyToken, getEdificioById);
router.get('/nombre/:nombre', verifyToken, getEdificioByName);
router.post('', verifyToken, verifyRoles(['administrador']), postEdificio)
router.put('/:id_edificio', verifyToken, verifyRoles(['administrador']), putEdificio)
router.delete('/:id_edificio', verifyToken, verifyRoles(['administrador']), deleteEdificio)

export default router