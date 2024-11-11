import {
    getAllTareas,
    findTareaById,
    findTareaByDescripcion,
    createTarea,
    updateTareaById,
    deleteTareaById
} from "../models/tarea.models.js";

export const getTareas = async (req, res, next) => {
    try {
        const tareas = await getAllTareas();
        res.json(tareas);
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
        next(error);
    }
};

export const getTareaById = async (req, res, next) => {
    const { id_tarea } = req.params;

    try {
        const tarea = await findTareaById(id_tarea);

        if (!tarea) {
            return next({ statusCode: 404, message: 'Tarea no encontrada' });
        }

        res.json(tarea);
    } catch (error) {
        console.error('Error al obtener la tarea por ID:', error);
        next(error);
    }
};

export const getTareaByDescripcion = async (req, res, next) => {
    const { descripcion } = req.query;

    try {
        const tarea = await findTareaByDescripcion(descripcion);

        if (!tarea) {
            return next({ statusCode: 404, message: 'No se encontraron tareas con esa descripción' });
        }

        res.json(tarea);
    } catch (error) {
        console.error('Error al buscar la tarea por descripción:', error);
        next(error);
    }
};

export const postTarea = async (req, res, next) => {
    const { descripcion } = req.body;

    if (!descripcion) {
        return res.status(400).json({ message: 'Debe asignar una descripción a la nueva tarea' });
    }

    try {
        const newTareaId = await createTarea(descripcion);
        res.status(201).json({ message: 'Tarea creada exitosamente', id_tarea: newTareaId });
    } catch (error) {
        console.error('Error al crear la tarea:', error);
        next(error);
    }
};

// Actualizar
export const putTarea = async (req, res, next) => {
    const { id_tarea } = req.params;
    const { descripcion } = req.body;

    if (!descripcion) {
        return res.status(400).json({ message: 'Debe asignarle una nueva descripción a la tarea' });
    }

    try {
        const existingTarea = await findTareaById(id_tarea);

        if (!existingTarea) {
            return next({ statusCode: 404, message: 'Tarea no encontrada' });
        }

        await updateTareaById(id_tarea, descripcion);
        res.json({ message: 'Tarea actualizada exitosamente' });
    } catch (error) {
        console.error('Error al actualizar la tarea:', error);
        next(error);
    }
};

export const deleteTarea = async (req, res, next) => {
    const { id_tarea } = req.params;

    try {
        const affectedRows = await deleteTareaById(id_tarea);
        if (affectedRows > 0) {
            res.json({ message: 'Tarea eliminada exitosamente' });
        } else {
            return next({ statusCode: 404, message: 'Tarea no encontrada' });
        }
    } catch (error) {
        console.error('Error al eliminar la tarea:', error);
        next(error);
    }
};
