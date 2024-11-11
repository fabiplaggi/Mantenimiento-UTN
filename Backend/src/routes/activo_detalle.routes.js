import { Router } from "express";
import {
  listarActivoDetalles,
  asignarCodigo,
  actualizarCodigo,
  buscarActivoDetallePorCodigo,
} from "../controllers/activo_detalle.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", listarActivoDetalles);

router.get("/:id_codigo", buscarActivoDetallePorCodigo);

router.post("/", verifyToken, verifyRoles(["administrador"]), asignarCodigo);

router.put(
  "/:id",
  verifyToken,
  verifyRoles(["administrador"]),
  actualizarCodigo
);

export default router;
