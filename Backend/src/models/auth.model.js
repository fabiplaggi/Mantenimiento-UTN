import { pool } from "../database/connection.database.js";

export const findUserByUsername = async (username) => {
    const [rows] = await pool.query('SELECT * FROM usuario WHERE username = ?', [username]);
    return rows[0];
};
