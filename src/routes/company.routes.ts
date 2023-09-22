import express from 'express';

import controller from "../controllers/company.controller";

const router = express.Router();

router.get('/', controller.getAllCompanies );
router.post('/', controller.createNewCompany );

router.get('/:term', controller.getCompanyByTerm );
router.patch('/:id', controller.updateCompany );
router.delete('/:id', controller.deleteCompany );

export default router;