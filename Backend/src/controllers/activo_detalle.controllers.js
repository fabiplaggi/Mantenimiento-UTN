import {
  getAllActivoDetalle,
  assignCodigoToActivo,
  updateCodigoById,
  getActivoDetalleByCodigoId
} from "../models/activo_detalle.models.js";

export const listarActivoDetalles = async (req, res) => {
  try {
    const detalles = await getAllActivoDetalle();
    const formattedDetalles = detalles.map(detalle => ({
      id_activo_detalle: detalle.id_activo_detalle,
      id_edificio: detalle.id_edificio,
      id_piso_nivel: detalle.id_piso_nivel,
      id_sector: detalle.id_sector,
      id_activo: detalle.id_activo,
      id_ubicacion: detalle.id_ubicacion,
      id_codigo: detalle.id_codigo
    }));
    res.status(200).json(formattedDetalles);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener códigos de activos", error });
  }
};

/*
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
 */
 

export const buscarActivoDetallePorCodigo = async (req, res) => {
  const { id_codigo } = req.params;
  try {
    const detalles = await getActivoDetalleByCodigoId(id_codigo);
    if (detalles.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontró código para el activo especificado" });
    }
    res.status(200).json(detalles);
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
