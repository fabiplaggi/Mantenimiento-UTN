import { Router } from "express";
import { 
    getCodigos,
    getCodigoById,
    getCodigoByName,
    postCodigo,
    putCodigo,
    deleteCodigo
} from "../controllers/codigo.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('', getCodigos)
router.get('/:id_codigo', getCodigoById);
router.get('/nombre/:nombre', getCodigoByName);
router.post('', verifyToken, verifyRoles(['administrador']), postCodigo)
router.put('/:id_codigo', verifyToken, verifyRoles(['administrador']), putCodigo)
router.delete('/:id_codigo', verifyToken, verifyRoles(['administrador']), deleteCodigo)

export default router