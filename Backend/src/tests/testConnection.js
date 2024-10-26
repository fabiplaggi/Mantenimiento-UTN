import { pool } from '../database/connection.database.js';

async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión a la base de datos exitosa!');
        connection.release();
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    }
}

testConnection();
