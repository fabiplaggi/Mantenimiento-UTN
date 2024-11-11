import { pool } from "../database/connection.database.js";

export const getAllTareas = async () => {
    const [rows] = await pool.query('SELECT * FROM tarea', []);
    return rows;
};

export const findTareaById = async (id_tarea) => {
    const [rows] = await pool.query('SELECT * FROM tarea WHERE id_tarea = ?', [id_tarea]);
    return rows[0];
};

export const findTareaByDescripcion = async (descripcion) => {
    const [rows] = await pool.query('SELECT * FROM tarea WHERE descripcion = ?', [descripcion])
    return rows[0]
  }

export const createTarea = async (descripcion) => {
    const [result] = await pool.query('INSERT INTO tarea (descripcion) VALUES (?)', [descripcion]);
    return result.insertId; // Devuelve el ID del nuevo activo
};

export const updateTareaById = async (id_tarea, descripcion) => {
    const [result] = await pool.query('UPDATE tarea SET descripcion = ? WHERE id_tarea = ?', [descripcion, id_tarea]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};

export const deleteTareaById = async (id_tarea) => {
    const [result] = await pool.query('DELETE FROM tarea WHERE id_tarea = ?', [id_tarea]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};