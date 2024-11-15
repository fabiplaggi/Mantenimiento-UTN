import { Router } from "express";
import {
  getTareas,
  getTareaById,
  getTareaByDescripcion,
  postTarea,
  putTarea,
  deleteTarea,
} from "../controllers/tarea.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("", getTareas);
router.get("/:id_tarea", getTareaById);
router.get("/buscar/:descripcion", getTareaByDescripcion);
router.post("", postTarea);
router.put("/:id_tarea", putTarea);
router.delete(
  "/:id_tarea",
  deleteTarea
);

export default router;
