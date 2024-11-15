import { Router } from "express";
import {
  getUbicaciones,
  getUbicacionById,
  getUbicacionByName,
  postUbicacion,
  putUbicacion,
  deleteUbicacion,
} from "../controllers/ubicacion.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("", getUbicaciones);
router.get("/:id_ubicacion", getUbicacionById);
router.get('/nombre/:nombre', getUbicacionByName);
router.post("", postUbicacion);
router.put(
  "/:id_ubicacion",
  putUbicacion
);
router.delete(
  "/:id_ubicacion",
  deleteUbicacion
);

export default router;
