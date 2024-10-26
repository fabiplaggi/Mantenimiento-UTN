import { getAllEdificios, findEdificioById, createEdificio, updateEdificioById, deleteEdificioById } from "../models/edificio.model.js";

export const getEdificios = async (req, res, next) => {
    try {
        const edificios = await getAllEdificios();
        res.json(edificios);
    } catch (error) {
        console.error('Error al obtener los edificios:', error);
        next(error);
    }
};

export const getEdificioById = async (req, res, next) => {
    const { id_edificio } = req.params;

    try {
        const edificio = await findEdificioById(id_edificio);

        if (!edificio) {
            return next({ statusCode: 404, message: 'Edificio no encontrado' });
        }

        res.json(edificio);
    } catch (error) {
        console.error('Error al obtener el edificio por ID:', error);
        next(error);
    }
};

export const postEdificio = async (req, res, next) => {
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ message: 'Debe asignar un nombre al nuevo edificio' });
    }

    try {
        const newEdificioId = await createEdificio(nombre);
        res.status(201).json({ message: 'Edificio creado exitosamente', id_edificio: newEdificioId });
    } catch (error) {
        console.error('Error al crear el edificio:', error);
        next(error);
    }
};

// Actualizar
export const putEdificio = async (req, res, next) => {
    const { id_edificio } = req.params;
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ message: 'Debe asignarle un nuevo nombre al edificio' });
    }

    try {
        const existingEdificio = await findEdificioById(id_edificio);

        if (!existingEdificio) {
            return next({ statusCode: 404, message: 'Edificio no encontrado' });
        }

        await updateEdificioById(id_edificio, nombre);
        res.json({ message: 'Edificio actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el edificio:', error);
        next(error);
    }
};

export const deleteEdificio = async (req, res, next) => {
    const { id_edificio } = req.params;

    try {
        const affectedRows = await deleteEdificioById(id_edificio);
        if (affectedRows > 0) {
            res.json({ message: 'Edificio eliminado exitosamente' });
        } else {
            return next({ statusCode: 404, message: 'Edificio no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar el edificio:', error);
        next(error);
    }
};
