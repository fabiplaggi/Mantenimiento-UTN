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

router.get('', getPisosNiveles)
router.get('/:id_piso_nivel', getPisoNivelById);
router.get('/nombre/:nombre', getPisoNivelByName);
router.post('', postPisoNivel)
router.put('/:id_piso_nivel', putPisoNivel)
router.delete('/:id_piso_nivel', deletePisoNivel)

export default router