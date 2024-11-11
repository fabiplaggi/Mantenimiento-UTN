import { pool } from "../database/connection.database.js";

export const getAllUsuarios = async () => {
  const [rows] = await pool.query('SELECT * FROM usuario', []);
  return rows;
};

export const createUsuario = async (username, rol, password) => {
  const [result] = await pool.query(
    'INSERT INTO usuario (username, rol, password) VALUES (?, ?, ?)',
    [username, rol, password]
  );
  return result.insertId;
};

export const updateUsuarioById = async (id_usuario, username, rol, password) => {
  const [result] = await pool.query(
    'UPDATE usuario SET username = ?, rol = ?, password = ? WHERE id_usuario = ?',
    [username, rol, password, id_usuario]
  );
  return result.affectedRows;
};

export const findUserByUsername = async (username) => {
  const [rows] = await pool.query('SELECT * FROM usuario WHERE username = ?', [username])
  return rows[0]
}

export const findUsuarioById = async (id_usuario) => {
  const [rows] = await pool.query('SELECT * FROM usuario WHERE id_usuario = ?', [id_usuario]);
  return rows[0];
};

export const deleteUsuarioById = async (id_usuario) => {
  const [rows] = await pool.query('DELETE FROM usuario WHERE id_usuario = ?', [id_usuario]);
  return rows.affectedRows;
};