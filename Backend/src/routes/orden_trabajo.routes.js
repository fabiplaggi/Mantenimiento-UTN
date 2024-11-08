import { Router } from "express";
import { obtenerOrdenes, crearOrden, actualizarOrden, eliminarOrden } from "../controllers/orden_trabajo.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/', verifyToken, verifyRoles(['administrador']), obtenerOrdenes);
router.post('/', verifyToken, crearOrden);
router.put('/:id', verifyToken, actualizarOrden);
router.delete('/:id', verifyToken, eliminarOrden);

export default router;
