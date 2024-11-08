import { Router } from "express";
import { getSectores, getSectorById, postSector, putSector, deleteSector } from "../controllers/sector.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('', verifyToken, getSectores)
router.get('/:id_sector', verifyToken, getSectorById);
router.post('', verifyToken, verifyRoles(['administrador']), postSector)
router.put('/:id_sector', verifyToken, verifyRoles(['administrador']), putSector)
router.delete('/:id_sector', verifyToken, verifyRoles(['administrador']), deleteSector)

export default router