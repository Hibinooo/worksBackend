import express from 'express';
import workController from '../controllers/work.controller.js';
const router = express.Router();


router.get('/work', workController.getWork)
router.post('/work', workController.createWork)

export default router