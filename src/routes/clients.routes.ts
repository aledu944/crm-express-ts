import express from 'express';
import controller from "../controllers/client.controller";


const router = express.Router();

router.get('/', controller.getAllClients );
router.get('/:term', controller.getClientByTerm );

router.post('/', controller.createNewClient );
router.patch('/:id', controller.updateClient );
router.delete('/:id', controller.deleteClient );

export default router;