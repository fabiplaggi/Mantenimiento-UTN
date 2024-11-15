import { Router } from "express";
import {
  listarActivoDetalles,
  asignarCodigo,
  actualizarCodigo,
  buscarActivoDetallePorCodigo,
} from "../controllers/activo_detalle.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     ActivoDetalle:
 *       type: object
 *       properties:
 *         id_activo_detalle:
 *           type: integer
 *           description: ID autogenerado del detalle del activo
 *         id_edificio:
 *           type: string
 *           description: Nombre del edificio
 *         id_piso_nivel:
 *           type: string
 *           description: Nivel o piso del activo
 *         id_sector:
 *           type: string
 *           description: Sector del activo
 *         id_activo:
 *           type: string
 *           description: Nombre del activo
 *         id_ubicacion:
 *           type: string
 *           description: Ubicación del activo
 *         id_codigo:
 *           type: string
 *           description: Código asignado al activo
 *       example:
 *         id_activo_detalle: 1
 *         id_edificio: "Edificio 1"
 *         id_piso_nivel: "Nivel 3"
 *         id_sector: "Sector 1"
 *         id_activo: "Activo 1"
 *         id_ubicacion: "Ubicación 1"
 *         id_codigo: "Código 1"
 */

/**
 * @swagger
 * /api/activo-detalles:
 *   get:
 *     summary: Lista todos los detalles de activos con sus códigos
 *     tags: [Activo-Detalles]
 *     responses:
 *       200:
 *         description: Lista de detalles de activos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ActivoDetalle'
 */
router.get("/", listarActivoDetalles);

/**
 * @swagger
 * /api/activo-detalles/{id_codigo}:
 *   get:
 *     summary: Busca un detalle de activo por su código
 *     tags: [Activo-Detalles]
 *     parameters:
 *       - in: path
 *         name: id_codigo
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del código del activo
 *     responses:
 *       200:
 *         description: Detalle del activo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActivoDetalle'
 *       404:
 *         description: No se encontró código para el activo especificado
 */
router.get("/:id_codigo", buscarActivoDetallePorCodigo);

/**
 * @swagger
 * /api/activo-detalles:
 *   post:
 *     summary: Asigna un código a un activo
 *     tags: [Activo-Detalles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_edificio:
 *                 type: integer
 *                 description: ID del edificio
 *               id_piso_nivel:
 *                 type: integer
 *                 description: Nivel o piso del activo
 *               id_sector:
 *                 type: integer
 *                 description: Sector del activo
 *               id_activo:
 *                 type: integer
 *                 description: ID del activo
 *               id_ubicacion:
 *                 type: integer
 *                 description: Ubicación del activo
 *               codigo:
 *                 type: string
 *                 description: Código a asignar al activo
 *             example:
 *               id_edificio: 1
 *               id_piso_nivel: 3
 *               id_sector: 1
 *               id_activo: 1
 *               id_ubicacion: 1
 *               codigo: "Nuevo Código"
 *     responses:
 *       201:
 *         description: Código asignado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Código asignado exitosamente"
 *                 id:
 *                   type: integer
 *                   example: 8
 *       500:
 *         description: Error al asignar código
 */
router.post("/", asignarCodigo);

/**
 * @swagger
 * /api/activo-detalles/{id}:
 *   put:
 *     summary: Actualiza el código de un activo existente
 *     tags: [Activo-Detalles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del detalle del activo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_edificio:
 *                 type: integer
 *               id_piso_nivel:
 *                 type: integer
 *               id_sector:
 *                 type: integer
 *               id_activo:
 *                 type: integer
 *               id_ubicacion:
 *                 type: integer
 *               codigo:
 *                 type: string
 *             example:
 *               id_edificio: 1
 *               id_piso_nivel: 3
 *               id_sector: 1
 *               id_activo: 1
 *               id_ubicacion: 1
 *               codigo: "Código Actualizado"
 *     responses:
 *       200:
 *         description: Código actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Código actualizado exitosamente"
 *       500:
 *         description: Error al actualizar código
 */
router.put(
  "/:id",
  actualizarCodigo
);

export default router;
