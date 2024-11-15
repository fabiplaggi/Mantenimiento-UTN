import { Router } from "express";
import {
    obtenerOrdenes,
    crearOrden,
    actualizarOrden,
    eliminarOrden
} from "../controllers/orden_trabajo.controllers.js";
import {
    listarTareasDeOrden,
    agregarTareaAOrden,
    eliminarTareaDeOrden,
} from "../controllers/orden_trabajo_tarea.controllers.js";
import {
    getTareasByActivo,
    asignarTareaAActivo,
} from "../controllers/activo_tarea.controllers.js";
import { getTareas } from "../controllers/tarea.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

// Rutas para órdenes de trabajo
router.get("/ordenes", obtenerOrdenes); // Obtener órdenes de trabajo con filtros
router.post("/ordenes", crearOrden); // Crear nueva orden de trabajo
router.put("/ordenes/:id", actualizarOrden); // Actualizar orden de trabajo existente
router.delete("/ordenes/:id", eliminarOrden); // Eliminar orden de trabajo

// Rutas para tareas de órdenes de trabajo
router.get("/ordenes/:id_orden/tareas", listarTareasDeOrden); // Listar tareas de una orden de trabajo específica
router.post("/ordenes/tareas", agregarTareaAOrden); // Agregar tarea a una orden de trabajo
router.delete("/ordenes/tareas/:id", eliminarTareaDeOrden); // Eliminar tarea de una orden de trabajo

// Rutas para tareas por activo
router.get("/activos/:id_activo/tareas", getTareasByActivo); // Obtener tareas por id de activo
router.post("/activos/tareas", asignarTareaAActivo); // Asignar tarea a activo

// Rutas para manejo de tareas generales
router.get("/tareas", getTareas); // Obtener todas las tareas

export default router;
