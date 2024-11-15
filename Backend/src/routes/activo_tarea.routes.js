import { Router } from "express";
import {
  asignarTareaAActivo,
  getTareasByActivo
} from "../controllers/activo_tarea.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/:id_activo", getTareasByActivo);
router.post(
  "/",
  asignarTareaAActivo
);

export default router;
