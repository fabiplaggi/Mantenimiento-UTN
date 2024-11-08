import express from 'express';
import 'dotenv/config.js'
import setupRoutes from './src/routes/index.routes.js';
import { errorHandler } from './src/middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express()
app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



// Rutas
setupRoutes(app)

app.use(errorHandler);

export default app;