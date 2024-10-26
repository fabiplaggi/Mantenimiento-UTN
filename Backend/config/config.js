import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || '2712200113011970'
export const DB_DATABASE = process.env.DB_DATABASE || 'mantenimiento_utn'
export const JWT_SECRET = process.env.JWT_SECRET || '2712200116081970'
export const NODE_ENV = process.env.NODE_ENV || 'production'