import express from 'express';
import controller from "../controllers/client.controller";


const router = express.Router();

router.get('/', controller.getAllClient );
router.post('/', controller.createNewClient );

export default router;