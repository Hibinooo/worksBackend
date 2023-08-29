import express from 'express';
import workController from '../controllers/work.controller.js';
import authenticateToken from '../middleware/authorization.js';
const router = express.Router();


router.get('/work', authenticateToken, workController.getWork)
router.post('/work', authenticateToken, workController.createWork)

export default router