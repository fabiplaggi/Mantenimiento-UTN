import { Router } from "express";
import {
  listarTareasDeOrden,
  agregarTareaAOrden,
  eliminarTareaDeOrden,
} from "../controllers/orden_trabajo_tarea.controllers.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/:id_orden", verifyToken, listarTareasDeOrden);
router.post("/", verifyToken, agregarTareaAOrden);
router.delete("/:id", verifyToken, eliminarTareaDeOrden);

export default router;