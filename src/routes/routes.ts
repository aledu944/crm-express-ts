import express from 'express';
import ClientsRoutes from './clients.routes'

const router = express.Router();

router.use('/clients', ClientsRoutes)

export default router;