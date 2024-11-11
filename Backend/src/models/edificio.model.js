import { pool } from "../database/connection.database.js";

export const getAllEdificios = async () => {
    const [rows] = await pool.query('SELECT * FROM edificio', []);
    return rows;
};

export const findEdificioById = async (id_edificio) => {
    const [rows] = await pool.query('SELECT * FROM edificio WHERE id_edificio = ?', [id_edificio]);
    return rows[0];
};

export const findEdificioByName = async (nombre) => {
    const [rows] = await pool.query('SELECT * FROM edificio WHERE nombre = ?', [nombre]);
    return rows[0];
};

export const createEdificio = async (nombre) => {
    const [result] = await pool.query('INSERT INTO edificio (nombre) VALUES (?)', [nombre]);
    return result.insertId; // Devuelve el ID del nuevo activo
};

export const updateEdificioById = async (id_edificio, nombre) => {
    const [result] = await pool.query('UPDATE edificio SET nombre = ? WHERE id_edificio = ?', [nombre, id_edificio]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};

export const deleteEdificioById = async (id_edificio) => {
    const [result] = await pool.query('DELETE FROM edificio WHERE id_edificio = ?', [id_edificio]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};