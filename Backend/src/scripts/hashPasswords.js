import bcrypt from 'bcrypt';
import { pool } from '../database/connection.database.js';

const users = [
    { username: 'FabiánPlaggi', password: 'fabian' },
    { username: 'EzequielMiño', password: 'ezequiel' },
    { username: 'DariénValla', password: 'darien' }
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
