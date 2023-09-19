import express from 'express';

import controller from "../controllers/company.controller";

const router = express.Router();

router.post('/', controller.createNewCompany );

export default router;