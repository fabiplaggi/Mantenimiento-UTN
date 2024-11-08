import {
  getAllCodigos,
  assignCodigoToActivo,
  updateCodigoById,
  getCodigoByActivoId,
} from "../models/activo_codigo.models.js";

export const listarCodigos = async (req, res) => {
  try {
    const codigos = await getAllCodigos();
    res.status(200).json(codigos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener códigos de activos", error });
  }
};

export const buscarCodigoPorActivo = async (req, res) => {
  const { id_activo } = req.params;
  try {
    const codigos = await getCodigoByActivoId(id_activo);
    if (codigos.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontró código para el activo especificado" });
    }
    res.status(200).json(codigos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al buscar código por id_activo", error });
  }
};

export const asignarCodigo = async (req, res) => {
  const codigoData = req.body;
  try {
    const id = await assignCodigoToActivo(codigoData);
    res.status(201).json({ message: "Código asignado exitosamente", id });
  } catch (error) {
    res.status(500).json({ message: "Error al asignar código", error });
  }
};

export const actualizarCodigo = async (req, res) => {
  const { id } = req.params;
  const codigoData = req.body;
  try {
    await updateCodigoById(id, codigoData);
    res.status(200).json({ message: "Código actualizado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar código", error });
  }
};
