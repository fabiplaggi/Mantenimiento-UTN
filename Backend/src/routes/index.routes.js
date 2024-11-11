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