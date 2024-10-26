import { getAllSectores, findSectorById, createSector, updateSectorById, deleteSectorById } from "../models/sector.models.js";

export const getSectores = async (req, res, next) => {
    try {
        const sectores = await getAllSectores();
        res.json(sectores);
    } catch (error) {
        console.error('Error al obtener los sectores:', error);
        next(error);
    }
};

export const getSectorById = async (req, res, next) => {
    const { id_sector } = req.params;

    try {
        const sector = await findSectorById(id_sector);

        if (!sector) {
            return next({ statusCode: 404, message: 'Sector no encontrado' });
        }

        res.json(sector);
    } catch (error) {
        console.error('Error al obtener el sector por ID:', error);
        next(error);
    }
};

export const postSector = async (req, res, next) => {
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ message: 'Debe asignar un nombre al nuevo sector' });
    }

    try {
        const newSectorId = await createSector(nombre);
        res.status(201).json({ message: 'Sector creado exitosamente', id_sector: newSectorId });
    } catch (error) {
        console.error('Error al crear el sector:', error);
        next(error);
    }
};

// Actualizar
export const putSector = async (req, res, next) => {
    const { id_sector } = req.params;
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ message: 'Debe asignarle un nuevo nombre al sector' });
    }

    try {
        const existingSector = await findSectorById(id_sector);

        if (!existingSector) {
            return next({ statusCode: 404, message: 'Sector no encontrado' });
        }

        await updateSectorById(id_sector, nombre);
        res.json({ message: 'Sector actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el sector:', error);
        next(error);
    }
};

export const deleteSector = async (req, res, next) => {
    const { id_sector } = req.params;

    try {
        const affectedRows = await deleteSectorById(id_sector);
        if (affectedRows > 0) {
            res.json({ message: 'Sector eliminado exitosamente' });
        } else {
            return next({ statusCode: 404, message: 'Sector no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar el sector:', error);
        next(error);
    }
};
