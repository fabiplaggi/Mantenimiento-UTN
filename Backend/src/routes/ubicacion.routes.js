import { Router } from "express";
import {
  getUbicaciones,
  getUbicacionById,
  postUbicacion,
  putUbicacion,
  deleteUbicacion,
} from "../controllers/ubicacion.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("", verifyToken, getUbicaciones);
router.get("/:id_ubicacion", verifyToken, getUbicacionById);
router.post("", verifyToken, verifyRoles(["administrador"]), postUbicacion);
router.put(
  "/:id_ubicacion",
  verifyToken,
  verifyRoles(["administrador"]),
  putUbicacion
);
router.delete(
  "/:id_ubicacion",
  verifyToken,
  verifyRoles(["administrador"]),
  deleteUbicacion
);

export default router;
