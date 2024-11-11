import { pool } from "../database/connection.database.js";

export const getAllCodigos = async () => {
    const [rows] = await pool.query('SELECT * FROM codigo', []);
    return rows;
};

export const findCodigoById = async (id_codigo) => {
    const [rows] = await pool.query('SELECT * FROM codigo WHERE id_codigo = ?', [id_codigo]);
    return rows[0];
};

export const findCodigoByName = async (nombre) => {
    const [rows] = await pool.query('SELECT * FROM codigo WHERE nombre = ?', [nombre]);
    return rows[0];
};

export const createCodigo = async (nombre) => {
    const [result] = await pool.query('INSERT INTO codigo (nombre) VALUES (?)', [nombre]);
    return result.insertId; // Devuelve el ID del nuevo activo
};

export const updateCodigoById = async (id_codigo, nombre) => {
    const [result] = await pool.query('UPDATE codigo SET nombre = ? WHERE id_codigo = ?', [nombre, id_codigo]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};

export const deleteCodigoById = async (id_codigo) => {
    const [result] = await pool.query('DELETE FROM codigo WHERE id_codigo = ?', [id_codigo]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};