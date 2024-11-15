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

router.get('', getEdificios)
router.get('/:id_edificio', getEdificioById);
router.get('/nombre/:nombre', getEdificioByName);
router.post('', postEdificio)
router.put('/:id_edificio', putEdificio)
router.delete('/:id_edificio', deleteEdificio)

export default router