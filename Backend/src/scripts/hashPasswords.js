import bcrypt from 'bcrypt';
import { pool } from '../database/connection.database.js';

const users = [
    { username: 'Fabián Plaggi', password: 'fabian' },
    { username: 'Ezequiel Miño', password: 'ezequiel' },
    { username: 'Darién Valla', password: 'darien' },
    { username: 'Trabajador1', password: 'trabajador1' },
    { username: 'Trabajador2', password: 'trabajador2' }
];

const updatePasswords = async () => {
    try {
        for (const user of users) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            await pool.query('UPDATE usuario SET password = ? WHERE username = ?', [hashedPassword, user.username]);
            console.log(`Contraseña hasheada para ${user.username}`);
        }
        console.log('Contraseñas actualizadas correctamente.');
    } catch (error) {
        console.error('Error actualizando contraseñas:', error);
    }
};

updatePasswords();
