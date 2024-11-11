import { Router } from "express";
import { getActivosCompletos } from "../controllers/activoCompleto.controllers.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router()

router.get('', getActivosCompletos)

export default router