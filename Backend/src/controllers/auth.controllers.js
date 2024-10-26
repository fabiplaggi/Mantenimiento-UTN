import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { findUserByUsername } from '../models/auth.model.js';
import { JWT_SECRET } from '../../config/config.js';


export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await findUserByUsername(username);

    if (!user) {
      return next({ statusCode: 404, message: 'Usuario inexistente' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return next({ statusCode: 403, message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      {
        id: user.id_usuario,
        username: user.username,
        role: user.rol
      },
      JWT_SECRET, 
      {
        expiresIn: '1h'
      });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 1000,
      sameSite: 'strict'
    });

    res.json({ message: 'Autenticación exitosa' });

  } catch (error) {
    console.error('Error en login:', error);
    next(error);
  }
};
