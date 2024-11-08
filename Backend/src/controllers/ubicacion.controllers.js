import { getAllUbicaciones, findUbicacionById, createUbicacion, updateUbicacionById, deleteUbicacionById } from "../models/ubicacion.models.js";

export const getUbicaciones = async (req, res, next) => {
    try {
        const ubicaciones = await getAllUbicaciones();
        res.json(ubicaciones);
    } catch (error) {
        console.error('Error al obtener las ubicaciones:', error);
        next(error);
    }
};

export const getUbicacionById = async (req, res, next) => {
    const { id_ubicacion } = req.params;

    try {
        const ubicacion = await findUbicacionById(id_ubicacion);

        if (!ubicacion) {
            return next({ statusCode: 404, message: 'Ubicacion no encontrada' });
        }

        res.json(ubicacion);
    } catch (error) {
        console.error('Error al obtener la ubicacion por ID:', error);
        next(error);
    }
};

export const postUbicacion = async (req, res, next) => {
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ message: 'Debe asignar un nombre a la nueva ubicacion' });
    }

    try {
        const newUbicacionId = await createUbicacion(nombre);
        res.status(201).json({ message: 'Ubicación creada exitosamente', id_ubicacion: newUbicacionId });
    } catch (error) {
        console.error('Error al crear la ubicacion:', error);
        next(error);
    }
};

// Actualizar
export const putUbicacion = async (req, res, next) => {
    const { id_ubicacion } = req.params;
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ message: 'Debe asignarle un nuevo nombre a la ubicación' });
    }

    try {
        const existingUbicacion = await findUbicacionById(id_ubicacion);

        if (!existingUbicacion) {
            return next({ statusCode: 404, message: 'Ubicación no encontrada' });
        }

        await updateUbicacionById(id_ubicacion, nombre);
        res.json({ message: 'Ubicación actualizada exitosamente' });
    } catch (error) {
        console.error('Error al actualizar la ubicación:', error);
        next(error);
    }
};

export const deleteUbicacion = async (req, res, next) => {
    const { id_ubicacion } = req.params;

    try {
        const affectedRows = await deleteUbicacionById(id_ubicacion);
        if (affectedRows > 0) {
            res.json({ message: 'Ubicación eliminada exitosamente' });
        } else {
            return next({ statusCode: 404, message: 'Ubicación no encontrada' });
        }
    } catch (error) {
        console.error('Error al eliminar la ubicación:', error);
        next(error);
    }
};
