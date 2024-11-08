import { getTareasByOrderId, addTareaToOrder, deleteTareaOrder } from "../models/orden_trabajo_tarea.models.js";

export const listarTareasDeOrden = async (req, res) => {
  const { id_orden } = req.params;
  try {
    const tareas = await getTareasByOrderId(id_orden);
    res.status(200).json(tareas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tareas de la orden", error });
  }
};

export const agregarTareaAOrden = async (req, res) => {
  const taskData = req.body;
  try {
    const id = await addTareaToOrder(taskData);
    res.status(201).json({ message: "Tarea agregada a la orden exitosamente", id });
  } catch (error) {
    res.status(500).json({ message: "Error al agregar tarea a la orden", error });
  }
};

export const eliminarTareaDeOrden = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteTareaOrder(id);
    res.status(200).json({ message: "Tarea eliminada de la orden exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar tarea de la orden", error });
  }
};
