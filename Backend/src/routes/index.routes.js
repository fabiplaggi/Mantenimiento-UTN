import authRoutes from './auth.routes.js';
import usuarioRoutes from './usuario.routes.js';
import activoRoutes from './activo.routes.js'
import edificioRoutes from './edificio.routes.js'
import pisoNivelRoutes from './piso_nivel.routes.js'
import sectorRoutes from './sector.routes.js'
import tareaRoutes from './tarea.routes.js'
import ubicacionRoutes from './ubicacion.routes.js'

const setupRoutes = (app) => {
    app.use('/api/auth', authRoutes);
    app.use('/api/usuarios', usuarioRoutes);
    app.use('/api/activos', activoRoutes)
    app.use('/api/edificios', edificioRoutes)
    app.use('/api/pisos', pisoNivelRoutes)
    app.use('/api/sectores', sectorRoutes)
    app.use('/api/tareas', tareaRoutes)
    app.use('/api/ubicaciones', ubicacionRoutes)
    // Otras rutas aquí
};

export default setupRoutes;