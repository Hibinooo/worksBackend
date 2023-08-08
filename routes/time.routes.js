import express from 'express';
import timeController from '../controllers/time.controller.js';
const router = express.Router();


router.post('/times', timeController.createTime)
router.get('/times', timeController.getTime)
router.patch('/times', timeController.updateTime)

export default router