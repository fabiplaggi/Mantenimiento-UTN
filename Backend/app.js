import express from 'express';
import 'dotenv/config.js'
import { config } from "dotenv";
import setupRoutes from './src/routes/index.routes.js';
import { errorHandler } from './src/middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';

const app = express()

app.use(express.json())

app.use(cookieParser());

// Rutas
setupRoutes(app)

app.use(errorHandler);

export default app;