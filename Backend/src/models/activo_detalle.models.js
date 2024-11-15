import { pool } from "../database/connection.database.js";

export const getAllActivoDetalle = async () => {
  const [rows] = await pool.query(`
    SELECT 
      ad.id_activo_detalle,
      e.nombre AS id_edificio,
      pn.nombre AS id_piso_nivel,
      s.nombre AS id_sector,
      a.nombre AS id_activo,
      u.nombre AS id_ubicacion,
      c.nombre AS id_codigo
    FROM activo_detalle ad
    JOIN edificio e ON ad.id_edificio = e.id_edificio
    JOIN piso_nivel pn ON ad.id_piso_nivel = pn.id_piso_nivel
    JOIN sector s ON ad.id_sector = s.id_sector
    JOIN activo a ON ad.id_activo = a.id_activo
    JOIN ubicacion u ON ad.id_ubicacion = u.id_ubicacion
    JOIN codigo c ON ad.id_codigo = c.id_codigo
    ORDER BY ad.id_activo_detalle;
  `);
  return rows;
};
/*
export const getAllCodigos = async () => {
  const [rows] = await pool.query("SELECT * FROM activo_codigo");
  return rows;
};
*/
export const getActivoDetalleByCodigoId = async (id_codigo) => {
  const [rows] = await pool.query(
    `SELECT ad.id_activo_detalle, e.nombre AS id_edificio,
      e.nombre AS id_edificio,
      pn.nombre AS id_piso_nivel,
      s.nombre AS id_sector,
      a.nombre AS id_activo,
      u.nombre AS id_ubicacion,
      c.nombre AS id_codigo
     FROM activo_detalle AS ad
     JOIN edificio e ON ad.id_edificio = e.id_edificio
    JOIN piso_nivel pn ON ad.id_piso_nivel = pn.id_piso_nivel
    JOIN sector s ON ad.id_sector = s.id_sector
    JOIN activo a ON ad.id_activo = a.id_activo
    JOIN ubicacion u ON ad.id_ubicacion = u.id_ubicacion
    JOIN codigo c ON ad.id_codigo = c.id_codigo
     WHERE ad.id_codigo = ?`,
    [id_codigo]
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
