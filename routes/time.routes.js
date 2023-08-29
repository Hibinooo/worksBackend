import express from 'express';
import timeController from '../controllers/time.controller.js';
import authenticateToken from '../middleware/authorization.js';
const router = express.Router();


router.post('/times', authenticateToken, timeController.createTime)
router.get('/times', authenticateToken, timeController.getTime)
router.patch('/times', authenticateToken, timeController.updateTime)

export default router