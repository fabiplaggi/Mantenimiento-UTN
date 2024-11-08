import { pool } from "../database/connection.database.js";

//La función findUserByUsername busca un usuario en la base de datos por su username
export const findUserByUsername = async (username) => {
    const [rows] = await pool.query('SELECT * FROM usuario WHERE username = ?', [username]);
    return rows[0];
};
