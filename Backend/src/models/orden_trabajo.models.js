import { pool } from "../database/connection.database.js";

export const getOrders = async (filters = {}) => {
  const { id_activo, id_edificio, id_usuario } = filters;
  const query = `
    SELECT * FROM orden_trabajo
    WHERE 1 = 1
    ${id_activo ? 'AND id_activo = ?' : ''}
    ${id_edificio ? 'AND id_edificio = ?' : ''}
    ${id_usuario ? 'AND id_usuario = ?' : ''}
  `;
  
  const values = [id_activo, id_edificio, id_usuario].filter(v => v);
  const [rows] = await pool.query(query, values);
  return rows;
};

export const createOrder = async (orderData) => {
  const {
    tipo_orden,
    id_activo_codigo,
    id_edificio,
    id_piso_nivel,
    id_sector,
    id_activo,
    id_ubicacion,
    fecha_impresion,
    fecha_realizacion,
    tiempo_utilizado,
    id_usuario,
    observaciones,
  } = orderData;

  const [result] = await pool.query(
    `INSERT INTO orden_trabajo (tipo_orden, id_activo_codigo, id_edificio, id_piso_nivel,
      id_sector, id_activo, id_ubicacion, fecha_impresion, fecha_realizacion,
      tiempo_utilizado, id_usuario, observaciones) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      tipo_orden,
      id_activo_codigo,
      id_edificio,
      id_piso_nivel,
      id_sector,
      id_activo,
      id_ubicacion,
      fecha_impresion,
      fecha_realizacion,
      tiempo_utilizado,
      id_usuario,
      observaciones,
    ]
  );

  return result.insertId;
};

export const updateOrder = async (id, orderData) => {
  const {
    tipo_orden,
    id_activo_codigo,
    id_edificio,
    id_piso_nivel,
    id_sector,
    id_activo,
    id_ubicacion,
    fecha_impresion,
    fecha_realizacion,
    tiempo_utilizado,
    observaciones,
  } = orderData;

  await pool.query(
    `UPDATE orden_trabajo 
     SET tipo_orden = ?, id_activo_codigo = ?, id_edificio = ?, 
         id_piso_nivel = ?, id_sector = ?, id_activo = ?, 
         id_ubicacion = ?, fecha_impresion = ?, 
         fecha_realizacion = ?, tiempo_utilizado = ?, 
         observaciones = ? 
     WHERE id_orden_trabajo = ?`,
    [
      tipo_orden,
      id_activo_codigo,
      id_edificio,
      id_piso_nivel,
      id_sector,
      id_activo,
      id_ubicacion,
      fecha_impresion,
      fecha_realizacion,
      tiempo_utilizado,
      observaciones,
      id,
    ]
  );
};

export const deleteOrder = async (id) => {
  await pool.query('DELETE FROM orden_trabajo WHERE id_orden_trabajo = ?', [id]);
};
