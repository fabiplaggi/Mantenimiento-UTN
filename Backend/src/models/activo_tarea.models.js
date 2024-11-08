import { pool } from "../database/connection.database.js";

export const getTareasByActivoId = async (id_activo) => {
  const [rows] = await pool.query(
    `SELECT at.id_activo_tarea, t.descripcion
     FROM activo_tarea AS at
     JOIN tarea AS t ON at.id_tarea = t.id_tarea
     WHERE at.id_activo = ?`,
    [id_activo]
  );
  return rows;
};

export const assignTareaToActivo = async (id_activo, id_tarea) => {
  const [result] = await pool.query(
    'INSERT INTO activo_tarea (id_activo, id_tarea) VALUES (?, ?)',
    [id_activo, id_tarea]
  );
  return result.insertId;
};
