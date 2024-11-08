import { pool } from "../database/connection.database.js";

export const getAllCodigos = async () => {
  const [rows] = await pool.query("SELECT * FROM activo_codigo");
  return rows;
};

export const getCodigoByActivoId = async (id_activo) => {
  const [rows] = await pool.query(
    "SELECT * FROM activo_codigo WHERE id_activo = ?",
    [id_activo]
  );
  return rows;
};

export const assignCodigoToActivo = async (codigoData) => {
  const {
    id_edificio,
    id_piso_nivel,
    id_sector,
    id_activo,
    id_ubicacion,
    codigo,
  } = codigoData;
  const [result] = await pool.query(
    "INSERT INTO activo_codigo (id_edificio, id_piso_nivel, id_sector, id_activo, id_ubicacion, codigo) VALUES (?, ?, ?, ?, ?, ?)",
    [id_edificio, id_piso_nivel, id_sector, id_activo, id_ubicacion, codigo]
  );
  return result.insertId;
};

export const updateCodigoById = async (id, codigoData) => {
  const {
    id_edificio,
    id_piso_nivel,
    id_sector,
    id_activo,
    id_ubicacion,
    codigo,
  } = codigoData;
  await pool.query(
    "UPDATE activo_codigo SET id_edificio = ?, id_piso_nivel = ?, id_sector = ?, id_activo = ?, id_ubicacion = ?, codigo = ? WHERE id_activo_codigo = ?",
    [id_edificio, id_piso_nivel, id_sector, id_activo, id_ubicacion, codigo, id]
  );
};
