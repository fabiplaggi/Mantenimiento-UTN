import { 
    getAllCodigos,
    findCodigoById,
    findCodigoByName,
    createCodigo,
    updateCodigoById,
    deleteCodigoById } from "../models/codigo.models.js";

export const getCodigos = async (req, res, next) => {
  try {
    const codigos = await getAllCodigos();
    res.json(codigos);
  } catch (error) {
    console.error('Error al obtener los códigos:', error);
    next(error);
  }
};

export const getCodigoById = async (req, res, next) => {

  const { id_codigo } = req.params;

  try {

    const codigo = await findCodigoById(id_codigo);

    if (!codigo) {
      return next({ statusCode: 404, message: 'Código no encontrado' });
    }

    res.json(codigo);
  } catch (error) {
    console.error('Error al obtener el código por ID:', error);
    next(error);
  }
};

export const getCodigoByName = async (req, res, next) => {
    const { nombre } = req.params;
  
    try {
      const codigo = await findCodigoByName(nombre);
  
      if (!codigo) {
        return next({ statusCode: 404, message: 'Código no encontrado' });
      }
  
      res.json(codigo);
    } catch (error) {
      console.error('Error al obtener el código por nombre:', error);
      next(error);
    }
  };

export const postCodigo = async (req, res, next) => {

  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ message: 'Debe asignar un nombre al nuevo código' });
  }

  try {
    const newCodigoId = await createCodigo(nombre);
    res.status(201).json({ message: 'Código creado exitosamente', id_codigo: newCodigoId });
  } catch (error) {
    console.error('Error al crear el código:', error);
    next(error);
  }
};

// Actualizar un activo
export const putCodigo = async (req, res, next) => {

  const { id_codigo } = req.params;
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ message: 'Debe asignarle un nuevo nombre al código' });
  }

  try {
    const existingCodigo = await findCodigoById(id_codigo);

    if (!existingCodigo) {
      return next({ statusCode: 404, message: 'Código no encontrado' });
    }

    await updateCodigoById(id_codigo, nombre);
    res.json({ message: 'Código actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el código:', error);
    next(error);
  }
};

export const deleteCodigo = async (req, res, next) => {
  
  const { id_codigo } = req.params;

  try {
    const affectedRows = await deleteCodigoById(id_codigo);
    if (affectedRows > 0) {
      res.json({ message: 'Código eliminado exitosamente' });
    } else {
      return next({ statusCode: 404, message: 'Código no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar el código:', error);
    next(error);
  }
};
