import { pool } from "../database/connection.database.js";


export const getTareasByActivoId = async (id_activo) => {
  const [rows] = await pool.query(
    `SELECT a.id_activo, a.nombre, t.id_tarea, t.descripcion
     FROM activo AS a
     JOIN activo_tarea AS at ON a.id_activo = at.id_activo
     JOIN tarea AS t ON at.id_tarea = t.id_tarea
     WHERE a.id_activo = ?`,
    [id_activo]
  );

  if (rows.length === 0) {
    return null;  // Devuelve null si no se encuentra el activo con tareas
  }

  // Construir la respuesta en el formato deseado
  const { id_activo: activoID, nombre } = rows[0];
  const tareas = rows.map(row => ({
    id_tarea: row.id_tarea,
    descripcion: row.descripcion
  }));

  return {
    activoID,
    nombre,
    tareas
  };
};

/**
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
 * 
 */

export const assignTareaToActivo = async (id_activo, id_tarea) => {
  const [result] = await pool.query(
    'INSERT INTO activo_tarea (id_activo, id_tarea) VALUES (?, ?)',
    [id_activo, id_tarea]
  );
  return result.insertId;
};
