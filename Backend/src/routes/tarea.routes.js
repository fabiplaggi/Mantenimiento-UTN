import { Router } from "express";
import {
  getTareas,
  getTareaById,
  postTarea,
  putTarea,
  deleteTarea,
} from "../controllers/tarea.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("", verifyToken, getTareas);
router.get("/:id_tarea", verifyToken, getTareaById);
router.post("", verifyToken, verifyRoles(["administrador"]), postTarea);
router.put("/:id_tarea", verifyToken, verifyRoles(["administrador"]), putTarea);
router.delete(
  "/:id_tarea",
  verifyToken,
  verifyRoles(["administrador"]),
  deleteTarea
);

export default router;
