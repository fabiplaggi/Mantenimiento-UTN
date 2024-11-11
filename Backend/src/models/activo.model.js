import { pool } from "../database/connection.database.js";

export const getAllActivos = async () => {
    const [rows] = await pool.query('SELECT * FROM activo', []);
    return rows;
};

export const findActivoById = async (id_activo) => {
    const [rows] = await pool.query('SELECT * FROM activo WHERE id_activo = ?', [id_activo]);
    return rows[0];
};

export const findActivoByNombre = async (nombre) => {
    const [rows] = await pool.query('SELECT * FROM activo WHERE nombre = ?', [nombre]);
    return rows[0];
};

export const createActivo = async (nombre) => {
    const [result] = await pool.query('INSERT INTO activo (nombre) VALUES (?)', [nombre]);
    return result.insertId; // Devuelve el ID del nuevo activo
};

export const updateActivoById = async (id_activo, nombre) => {
    const [result] = await pool.query('UPDATE activo SET nombre = ? WHERE id_activo = ?', [nombre, id_activo]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};

export const deleteActivoById = async (id_activo) => {
    const [result] = await pool.query('DELETE FROM activo WHERE id_activo = ?', [id_activo]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};