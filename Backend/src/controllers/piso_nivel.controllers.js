import { getAllPisosNiveles, findPisoNivelById, createPisoNivel, updatePisoNivelById, deletePisoNivelById } from "../models/piso_nivel.models.js";

export const getPisosNiveles = async (req, res, next) => {
    try {
        const pisosNiveles = await getAllPisosNiveles();
        res.json(pisosNiveles);
    } catch (error) {
        console.error('Error al obtener los pisos/niveles:', error);
        next(error);
    }
};

export const getPisoNivelById = async (req, res, next) => {
    const { id_piso_nivel } = req.params;

    try {
        const pisoNivel = await findPisoNivelById(id_piso_nivel);

        if (!pisoNivel) {
            return next({ statusCode: 404, message: 'Piso/Nivel no encontrado' });
        }

        res.json(pisoNivel);
    } catch (error) {
        console.error('Error al obtener el piso/nivel por ID:', error);
        next(error);
    }
};

export const postPisoNivel = async (req, res, next) => {
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ message: 'Debe asignar un nombre al nuevo piso/nivel' });
    }

    try {
        const newPisoNivelId = await createPisoNivel(nombre);
        res.status(201).json({ message: 'Piso/Nivel creado exitosamente', id_piso_nivel: newPisoNivelId });
    } catch (error) {
        console.error('Error al crear el piso/nivel:', error);
        next(error);
    }
};

// Actualizar
export const putPisoNivel = async (req, res, next) => {
    const { id_piso_nivel } = req.params;
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ message: 'Debe asignarle un nuevo nombre al piso/nivel' });
    }

    try {
        const existingPisoNivel = await findPisoNivelById(id_piso_nivel);

        if (!existingPisoNivel) {
            return next({ statusCode: 404, message: 'Piso/Nivel no encontrado' });
        }

        await updatePisoNivelById(id_piso_nivel, nombre);
        res.json({ message: 'Piso/Nivel actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el piso/nivel:', error);
        next(error);
    }
};

export const deletePisoNivel = async (req, res, next) => {
    const { id_piso_nivel } = req.params;

    try {
        const affectedRows = await deletePisoNivelById(id_piso_nivel);
        if (affectedRows > 0) {
            res.json({ message: 'Piso/Nivel eliminado exitosamente' });
        } else {
            return next({ statusCode: 404, message: 'Piso/Nivel no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar el piso/nivel:', error);
        next(error);
    }
};
