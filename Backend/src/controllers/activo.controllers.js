import {
  getAllActivos,
  findActivoById,
  findActivoByNombre,
  createActivo,
  updateActivoById,
  deleteActivoById
} from "../models/activo.model.js";

export const getActivos = async (req, res, next) => {
  try {
    const activos = await getAllActivos();
    res.json(activos);
  } catch (error) {
    console.error('Error al obtener los activos:', error);
    next(error);
  }
};

export const getActivoById = async (req, res, next) => {

  const { id_activo } = req.params;

  try {

    const activo = await findActivoById(id_activo);

    if (!activo) {
      return next({ statusCode: 404, message: 'Activo no encontrado' });
    }

    res.json(activo);
  } catch (error) {
    console.error('Error al obtener el activo por ID:', error);
    next(error);
  }
};

export const getActivoByNombre = async (req, res, next) => {
  const { nombre } = req.params;

  try {
    const activo = await findActivoByNombre(nombre);

    if (!activo) {
      return next({ statusCode: 404, message: 'Activo no encontrado' });
    }

    res.json(activo);
  } catch (error) {
    console.error('Error al obtener el activo por nombre:', error);
    next(error);
  }
};

export const postActivo = async (req, res, next) => {

  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ message: 'Debe asignar un nombre al nuevo activo' });
  }

  try {
    const newActivoId = await createActivo(nombre);
    res.status(201).json({ message: 'Activo creado exitosamente', id_activo: newActivoId });
  } catch (error) {
    console.error('Error al crear el activo:', error);
    next(error);
  }
};

// Actualizar un activo
export const putActivo = async (req, res, next) => {

  const { id_activo } = req.params;
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ message: 'Debe asignarle un nuevo nombre al activo' });
  }

  try {
    const existingActivo = await findActivoById(id_activo);

    if (!existingActivo) {
      return next({ statusCode: 404, message: 'Activo no encontrado' });
    }

    await updateActivoById(id_activo, nombre);
    res.json({ message: 'Activo actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el activo:', error);
    next(error);
  }
};

export const deleteActivo = async (req, res, next) => {
  
  const { id_activo } = req.params;

  try {
    const affectedRows = await deleteActivoById(id_activo);
    if (affectedRows > 0) {
      res.json({ message: 'Activo eliminado exitosamente' });
    } else {
      return next({ statusCode: 404, message: 'Activo no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar el activo:', error);
    next(error);
  }
};
