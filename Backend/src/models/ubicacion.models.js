import { pool } from "../database/connection.database.js";

export const getAllUbicaciones = async () => {
    const [rows] = await pool.query('SELECT * FROM ubicacion', []);
    return rows;
};

export const findUbicacionById = async (id_ubicacion) => {
    const [rows] = await pool.query('SELECT * FROM ubicacion WHERE id_ubicacion = ?', [id_ubicacion]);
    return rows[0];
};

export const findUbicacionByName = async (nombre) => {
    const [rows] = await pool.query('SELECT * FROM ubicacion WHERE nombre = ?', [nombre]);
    return rows[0];
};

export const createUbicacion = async (nombre) => {
    const [result] = await pool.query('INSERT INTO ubicacion (nombre) VALUES (?)', [nombre]);
    return result.insertId; // Devuelve el ID del nuevo activo
};

export const updateUbicacionById = async (id_ubicacion, nombre) => {
    const [result] = await pool.query('UPDATE ubicacion SET nombre = ? WHERE id_ubicacion = ?', [nombre, id_ubicacion]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};

export const deleteUbicacionById = async (id_ubicacion) => {
    const [result] = await pool.query('DELETE FROM ubicacion WHERE id_ubicacion = ?', [id_ubicacion]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};