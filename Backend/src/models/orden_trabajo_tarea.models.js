import { pool } from "../database/connection.database.js";

export const getTareasByOrderId = async (orderId) => {
  const [rows] = await pool.query(
    `SELECT * FROM orden_trabajo_tarea WHERE id_orden_trabajo = ?`, 
    [orderId]
  );
  return rows;
};

export const addTareaToOrder = async (taskData) => {
  const { id_orden_trabajo, id_tarea } = taskData;

  const [result] = await pool.query(
    `INSERT INTO orden_trabajo_tarea (id_orden_trabajo, id_tarea) VALUES (?, ?)`,
    [id_orden_trabajo, id_tarea]
  );

  return result.insertId;
};

export const deleteTareaOrder = async (id) => {
  await pool.query('DELETE FROM orden_trabajo_tarea WHERE id_orden_trabajo_tarea = ?', [id]);
};
