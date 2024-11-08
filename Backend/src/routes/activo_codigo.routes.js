import { Router } from "express";
import {
  listarCodigos,
  asignarCodigo,
  actualizarCodigo,
  buscarCodigoPorActivo,
} from "../controllers/activo_codigo.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", verifyToken, listarCodigos);

router.get("/:id_activo", verifyToken, buscarCodigoPorActivo);

router.post("/", verifyToken, verifyRoles(["administrador"]), asignarCodigo);

router.put(
  "/:id",
  verifyToken,
  verifyRoles(["administrador"]),
  actualizarCodigo
);

export default router;
