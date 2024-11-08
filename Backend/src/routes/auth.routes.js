import { Router } from "express";
import { login, logout, register } from '../controllers/auth.controllers.js';

const router = Router();

router.post('/login', login);
router.post('/logout', logout)
router.post('/register', register)

export default router;

/**
 * Rutas y Endpoints
POST /api/auth/login: Inicia sesión y retorna un token JWT en las cookies si el usuario y la 
contraseña son correctos.
POST /api/auth/logout: Cierra la sesión, eliminando el token almacenado en las cookies.
POST /api/auth/register: Registra un nuevo usuario, asigna un token JWT y lo devuelve en las 
cookies.
 */