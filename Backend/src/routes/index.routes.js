    import authRoutes from './auth.routes.js'
    import usuarioRoutes from './usuario.routes.js'
    import activoRoutes from './activo.routes.js'
    import edificioRoutes from './edificio.routes.js'
    import pisoNivelRoutes from './piso_nivel.routes.js'
    import sectorRoutes from './sector.routes.js'
    import tareaRoutes from './tarea.routes.js'
    import ubicacionRoutes from './ubicacion.routes.js'
    import activoTareaRoutes from './activo_tarea.routes.js'
    import activoDetalleRoutes from './activo_detalle.routes.js'
    import ordenTrabajoRoutes from './orden_trabajo.routes.js'
    import ordenTrabajoTareaRoutes from './orden_trabajo_tarea.routes.js'
    import activoCompletoRoutes from './activoCompleto.routes.js'
    import codigoRoutes from './codigo.routes.js'

    const setupRoutes = (app) => {
        /**
 * @swagger
 * tags:
 *   - name: Autenticación
 *     description: Endpoints para la autenticación de usuarios
 *   - name: Usuarios
 *     description: Endpoints para la gestión de usuarios
 *   - name: Activos
 *     description: Endpoints para la gestión de activos
 *   - name: Edificios
 *     description: Endpoints para la gestión de edificios
 *   - name: Pisos
 *     description: Endpoints para la gestión de niveles/pisos
 *   - name: Sectores
 *     description: Endpoints para la gestión de sectores
 *   - name: Tareas
 *     description: Endpoints para la gestión de tareas
 *   - name: Ubicaciones
 *     description: Endpoints para la gestión de ubicaciones
 *   - name: Activo-Tareas
 *     description: Endpoints para asignar tareas a activos
 *   - name: Activo-Detalles
 *     description: Endpoints para gestionar los detalles de activos y sus códigos
 *   - name: Ordenes-Trabajo
 *     description: Endpoints para la gestión de órdenes de trabajo
 *   - name: Orden-Trabajo-Tareas
 *     description: Endpoints para la gestión de tareas dentro de una orden de trabajo
 *   - name: Activo-Completo
 *     description: Endpoints para obtener la información completa de un activo
 *   - name: Códigos
 *     description: Endpoints para la gestión de códigos de activos
 */

        app.use('/api/auth', authRoutes)
        app.use('/api/usuarios', usuarioRoutes)
        app.use('/api/activos', activoRoutes)
        app.use('/api/edificios', edificioRoutes)
        app.use('/api/pisos', pisoNivelRoutes)
        app.use('/api/sectores', sectorRoutes)
        app.use('/api/tareas', tareaRoutes)
        app.use('/api/ubicaciones', ubicacionRoutes)
        app.use('/api/activo-tareas', activoTareaRoutes)
        app.use('/api/activo-detalles', activoDetalleRoutes)
        app.use('/api/ordenes-trabajo', ordenTrabajoRoutes)
        app.use('/api/orden-trabajo-tareas', ordenTrabajoTareaRoutes)
        app.use('/api/activoCompleto', activoCompletoRoutes)
        app.use('/api/codigos', codigoRoutes)
    }

    export default setupRoutes