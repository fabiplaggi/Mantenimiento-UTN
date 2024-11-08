import { Router } from "express";
import {
  obtenerTareasPorActivo,
  asignarTareaAActivo,
} from "../controllers/activo_tarea.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/:id_activo", verifyToken, obtenerTareasPorActivo);
router.post(
  "/",
  verifyToken,
  verifyRoles(["administrador"]),
  asignarTareaAActivo
);

export default router;
