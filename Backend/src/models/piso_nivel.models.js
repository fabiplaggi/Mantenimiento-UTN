import { pool } from "../database/connection.database.js";

export const getAllPisosNiveles = async () => {
    const [rows] = await pool.query('SELECT * FROM piso_nivel', []);
    return rows;
};

export const findPisoNivelById = async (id_piso_nivel) => {
    const [rows] = await pool.query('SELECT * FROM piso_nivel WHERE id_piso_nivel = ?', [id_piso_nivel]);
    return rows[0];
};

export const findPisoNivelByName = async (nombre) => {
    const [rows] = await pool.query('SELECT * FROM piso_nivel WHERE nombre = ?', [nombre]);
    return rows[0];
};

export const createPisoNivel = async (nombre) => {
    const [result] = await pool.query('INSERT INTO piso_nivel (nombre) VALUES (?)', [nombre]);
    return result.insertId; // Devuelve el ID del nuevo activo
};

export const updatePisoNivelById = async (id_piso_nivel, nombre) => {
    const [result] = await pool.query('UPDATE piso_nivel SET nombre = ? WHERE id_piso_nivel = ?', [nombre, id_piso_nivel]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};

export const deletePisoNivelById = async (id_piso_nivel) => {
    const [result] = await pool.query('DELETE FROM piso_nivel WHERE id_piso_nivel = ?', [id_piso_nivel]);
    return result.affectedRows; // Devuelve el número de filas afectadas
};