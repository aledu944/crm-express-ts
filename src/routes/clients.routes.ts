import express from 'express';
import controller from "../controllers/client.controller";


const router = express.Router();

router.get('/', controller.getAllClient );

export default router;