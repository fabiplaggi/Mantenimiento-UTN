import { Router } from "express";
import {
    getActivos,
    getActivoById,
    getActivoByNombre,
    postActivo,
    putActivo,
    deleteActivo
} from "../controllers/activo.controllers.js";
import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";

const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Activo:
 *       type: object
 *       properties:
 *         id_activo:
 *           type: integer
 *           description: ID autogenerado del activo
 *         nombre:
 *           type: string
 *           description: Nombre del activo
 *       example:
 *         id_activo: 1
 *         nombre: "Iluminación"
 */

/**
 * @swagger
 * tags:
 *   name: Activos
 *   description: API para la gestión de activos
 */

/**
 * @swagger
 * /api/activos:
 *   get:
 *     summary: Retorna la lista de todos los activos
 *     tags: [Activos]
 *     responses:
 *       200:
 *         description: Lista de activos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activo'
 */
router.get('', getActivos)

/**
 * @swagger
 * /api/activos/{id_activo}:
 *   get:
 *     summary: Obtiene un activo por su ID
 *     tags: [Activos]
 *     parameters:
 *       - in: path
 *         name: id_activo
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del activo
 *     responses:
 *       200:
 *         description: Datos del activo especificado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activo'
 *       404:
 *         description: Activo no encontrado
 */
router.get('/:id_activo', getActivoById);

/**
 * @swagger
 * /api/activos/nombre/{nombre}:
 *   get:
 *     summary: Obtiene un activo por su nombre
 *     tags: [Activos]
 *     parameters:
 *       - in: path
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del activo
 *     responses:
 *       200:
 *         description: Datos del activo especificado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activo'
 *       404:
 *         description: Activo no encontrado
 */
router.get('/nombre/:nombre', getActivoByNombre);

/**
 * @swagger
 * /api/activos:
 *   post:
 *     summary: Crea un nuevo activo
 *     tags: [Activos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del activo a crear
 *             example:
 *               nombre: "Cámaras de Seguridad"
 *     responses:
 *       201:
 *         description: Activo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Activo creado exitosamente"
 *                 id_activo:
 *                   type: integer
 *                   example: 11
 *       400:
 *         description: Error en la solicitud
 */
router.post('', postActivo)

/**
 * @swagger
 * /api/activos/{id_activo}:
 *   put:
 *     summary: Actualiza un activo existente
 *     tags: [Activos]
 *     parameters:
 *       - in: path
 *         name: id_activo
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del activo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nuevo nombre del activo
 *             example:
 *               nombre: "Iluminación Interior"
 *     responses:
 *       200:
 *         description: Activo actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Activo actualizado exitosamente"
 *       404:
 *         description: Activo no encontrado
 *       400:
 *         description: Error en la solicitud
 */
router.put('/:id_activo', putActivo)

/**
 * @swagger
 * /api/activos/{id_activo}:
 *   delete:
 *     summary: Elimina un activo
 *     tags: [Activos]
 *     parameters:
 *       - in: path
 *         name: id_activo
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del activo
 *     responses:
 *       200:
 *         description: Activo eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Activo eliminado exitosamente"
 *       404:
 *         description: Activo no encontrado
 */
router.delete('/:id_activo', deleteActivo)

export default router