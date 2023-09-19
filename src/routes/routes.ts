import express from 'express';
import ClientsRoutes from './clients.routes'
import CompanyRoutes from './company.routes'

const router = express.Router();

router.use('/clients', ClientsRoutes)
router.use('/companies', CompanyRoutes)

export default router;