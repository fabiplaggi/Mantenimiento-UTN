import { getAllActivos } from "../models/activo.model.js";
import { getAllEdificios } from "../models/edificio.model.js";
import { getAllPisosNiveles } from "../models/piso_nivel.models.js";

export const getActivosCompletos = async (req, res, next) => {
    try {
      const activos = await getAllActivos();
      const edificios = await getAllEdificios();
      const pisos = await getAllPisosNiveles();
      res.json(activos, edificios, pisos);
    } catch (error) {
      console.error('Error al obtener los activos completos:', error);
      next(error);
    }
  };