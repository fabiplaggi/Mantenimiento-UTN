import bcrypt from 'bcrypt'
import {
  getAllUsuarios,
  createUsuario,
  updateUsuarioById,
  findUserByUsername,
  findUsuarioById,
  deleteUsuarioById
} from '../models/usuario.model.js';

export const getUsuarios = async (req, res, next) => {
  try {
    const usuarios = await getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    next(error);
  }
};

export const getUsuarioByUsename = async (req, res, next) => {
  const { username } = req.params

  try {
    const usuario = await findUserByUsername(username)

    if (!usuario) {
      return next({ statusCode: 404, message: 'Usuario no encontrado' });
    }
    res.json(usuario)
  } catch (error) {
    console.error('Error al obtener el usuario por username:', error);
    next(error);
  }
}
export const getUsuarioById = async (req, res, next) => {
  const { id_usuario } = req.params;

  try {
    const usuario = await findUsuarioById(id_usuario);

    if (!usuario) {
      return next({ statusCode: 404, message: 'Usuario no encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    console.error('Error al obtener el usuario por ID:', error);
    next(error);
  }
};


export const postUsuarios = async (req, res, next) => {
  const { username, rol, password } = req.body;

  if (!username) {
    return res.status(400).json({ message: 'El campo username es obligatorio' });
  }

  if (!rol) {
    return res.status(400).json({ message: 'El campo rol es obligatorio' });
  }

  if (!password) {
    return res.status(400).json({ message: 'El campo password es obligatorio' });
  }

  try {

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await createUsuario(username, rol, hashedPassword);
    res.status(201).json({ message: 'Usuario registrado exitosamente', userId });

  } catch (error) {
    console.error('Error al registrar el usuario:', error);

    if (error.code === 'ER_DUP_ENTRY') {
      return next({ statusCode: 409, message: 'El nombre de usuario ya existe' });
    }

    next(error);
  }
};

export const putUsuario = async (req, res, next) => {
  const { id_usuario } = req.params;
  const { username, rol, password } = req.body; // Asegúrate de obtener la contraseña también.

  if (!username) {
    return res.status(400).json({ message: 'El campo username es obligatorio' });
  }
  if (!rol) {
    return res.status(400).json({ message: 'El campo rol es obligatorio' });
  }

  try {
    const existingUser = await findUsuarioById(id_usuario);

    if (!existingUser) {
      return next({ statusCode: 404, message: 'Usuario no encontrado' });
    }

    if (existingUser.rol === 'administrador' && rol !== existingUser.rol) {
      return next({ statusCode: 403, message: 'No puedes cambiar tu propio rol de administrador' });
    }

    // Hasheamos la contraseña solo si se proporciona un nuevo valor
    const hashedPassword = password ? await bcrypt.hash(password, 10) : existingUser.password;

    // Actualiza el usuario
    const affectedRows = await updateUsuarioById(id_usuario, username, rol, hashedPassword);

    if (affectedRows > 0) {
      res.json({ message: 'Usuario actualizado exitosamente' });
    } else {
      return next({ statusCode: 404, message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    next(error);
  }
};



export const deleteUsuario = async (req, res, next) => {
  try {
    const affectedRows = await deleteUsuarioById(req.params.id_usuario);
    if (affectedRows > 0) {
      res.json({ message: 'Usuario eliminado exitosamente' });
    } else {
      return next({ statusCode: 404, message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    next(error);
  }
};
