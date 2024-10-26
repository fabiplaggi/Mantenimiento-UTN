import jwt from 'jsonwebtoken';
import 'dotenv/config.js'
import { JWT_SECRET } from '../../config/config.js';

export const verifyToken = (req, res, next) => {
    try {
        // Obtener el token desde las cookies
        const token = req.cookies.token;

        if (!token) {
            return res.status(403).json({ message: 'No se proporcionó token' });
        }

        // Validación y decodificación del token
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Token inválido' });
            }

            /* En caso de que el token haya expirado, el middleware retornará un error 
            con el mensaje "El token ha expirado".*/
            const currentTime = Math.floor(Date.now() / 1000);
            if (decoded.exp < currentTime) {
                return res.status(401).json({ message: 'El token ha expirado' });
            }

            req.user = decoded; // Almacenar los datos del usuario decodificados
            next(); // Continuar con el siguiente middleware
        });
    } catch (error) {
        console.error('Error verifyToken middleware:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

export const verifyRoles = (roles) => {
    return (req, res, next) => {
        try {
            if (!req.user || !roles.includes(req.user.role)) {
                return res.status(403).json({ message: 'No tienes el rol de administrador para realizar esta acción' });
            }
            next();
        } catch (error) {
            console.error('Error verifyRoles middleware:', error);
            res.status(500).json({ message: 'Error en el servidor' });
        }
    };
};
