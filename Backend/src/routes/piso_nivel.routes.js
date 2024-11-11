import { Router } from "express";
import {
    getPisosNiveles,
    getPisoNivelById,
    getPisoNivelByName,
    postPisoNivel,
    putPisoNivel,
    deletePisoNivel
} from "../controllers/piso_nivel.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('', verifyToken, getPisosNiveles)
router.get('/:id_piso_nivel', verifyToken, getPisoNivelById);
router.get('/nombre/:nombre', verifyToken, getPisoNivelByName);
router.post('', verifyToken, verifyRoles(['administrador']), postPisoNivel)
router.put('/:id_piso_nivel', verifyToken, verifyRoles(['administrador']), putPisoNivel)
router.delete('/:id_piso_nivel', verifyToken, verifyRoles(['administrador']), deletePisoNivel)

export default router