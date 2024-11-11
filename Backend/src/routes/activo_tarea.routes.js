import { Router } from "express";
import {
  //obtenerTareasPorActivo,
  asignarTareaAActivo,
  getTareasByActivo
} from "../controllers/activo_tarea.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/:id_activo", getTareasByActivo);
router.post(
  "/",
  verifyToken,
  verifyRoles(["administrador"]),
  asignarTareaAActivo
);

export default router;
