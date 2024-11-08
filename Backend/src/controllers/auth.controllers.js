import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { findUserByUsername } from "../models/auth.model.js";
import { JWT_SECRET, NODE_ENV } from "../../config/config.js";
import { createUsuario } from "../models/usuario.model.js";

/**
 * login: Autentica al usuario, compara la contraseña con bcrypt, y genera un token JWT si es 
 * válido. Este token se guarda en las cookies para ser usado en futuras solicitudes.
 */
export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await findUserByUsername(username);

    if (!user) {
      return next({ statusCode: 404, message: "Usuario inexistente" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return next({ statusCode: 403, message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      {
        id: user.id_usuario,
        username: user.username,
        rol: user.rol,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token, message: "Autenticación exitosa" })
  } catch (error) {
    console.error("Error en login:", error);
    next(error);
  }
};

//logout: Borra el token de las cookies para cerrar la sesión del usuario.
export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Sesión cerrada exitosamente" });
};


/**
 * register: Crea un nuevo usuario en la base de datos y retorna un token JWT en las cookies 
 * para autenticación.
 */
export const register = async (req, res, next) => {
  const { username, rol, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username y password son obligatorios" });
  }

  try {
    // Validar si el usuario ya existe
    const existingUser = await findUserByUsername(username);
    if (existingUser) {
      return res.status(409).json({ message: "El usuario ya existe" });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario en la base de datos
    const userId = await createUsuario(username, rol, hashedPassword);

    if (!userId) {
      return res.status(500).json({ message: "Error al registrar el usuario" });
    }

    // Crear y asignar el token JWT
    const token = jwt.sign({ userId, username, rol }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: NODE_ENV === "production",
    });
    res.status(201).json({ message: "Usuario registrado exitosamente", token });
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    next(error);
  }
};