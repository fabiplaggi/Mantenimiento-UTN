import { Router } from "express";
import {
    getSectores,
    getSectorById,
    getSectorByName,
    postSector,
    putSector,
    deleteSector
} from "../controllers/sector.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('', getSectores)
router.get('/:id_sector', getSectorById);
router.get('/nombre/:nombre', getSectorByName);
router.post('', postSector)
router.put('/:id_sector', putSector)
router.delete('/:id_sector', deleteSector)

export default router