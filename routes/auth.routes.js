import express from 'express';
import authController from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/login', authController.login)

router.get('/refresh_token', authController.refresh)

export default router