import { getTareasByActivoId, assignTareaToActivo } from "../models/activo_tarea.models.js";

export const obtenerTareasPorActivo = async (req, res) => {
  const { id_activo } = req.params;
  try {
    const tareas = await getTareasByActivoId(id_activo);
    res.status(200).json(tareas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tareas", error });
  }
};

export const asignarTareaAActivo = async (req, res) => {
  const { id_activo, id_tarea } = req.body;
  try {
    const id = await assignTareaToActivo(id_activo, id_tarea);
    res.status(201).json({ message: "Tarea asignada exitosamente", id });
  } catch (error) {
    res.status(500).json({ message: "Error al asignar tarea", error });
  }
};
