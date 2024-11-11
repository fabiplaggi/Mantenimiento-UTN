import { pool } from "../database/connection.database.js";

export const getAllSectores = async () => {
    const [rows] = await pool.query('SELECT * FROM sector', []);
    return rows;
};

export const findSectorById = async (id_sector) => {
    const [rows] = await pool.query('SELECT * FROM sector WHERE id_sector = ?', [id_sector]);
    return rows[0];
};

export const findSectorByName = async (nombre) => {
    const [rows] = await pool.query('SELECT * FROM sector WHERE nombre = ?', [nombre]);
    return rows[0];
};

export const createSector = async (nombre) => {
    const [result] = await pool.query('INSERT INTO sector (nombre) VALUES (?)', [nombre]);
    return result.insertId; // Devuelve el ID del nuevo activo
};

export const updateSectorById = async (id_sector, nombre) => {
    const [result] = await pool.query('UPDATE sector SET nombre = ? WHERE id_sector = ?', [nombre, id_sector]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};

export const deleteSectorById = async (id_sector) => {
    const [result] = await pool.query('DELETE FROM sector WHERE id_sector = ?', [id_sector]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};