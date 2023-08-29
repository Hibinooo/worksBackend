import express from 'express';
import userController from '../controllers/user.controller.js';
import authenticateToken from '../middleware/authorization.js';
const router = express.Router();

router.post('/user', authenticateToken, userController.createUser)
router.get('/user', authenticateToken, authenticateToken, userController.getUsers)
router.get('/user/:id', authenticateToken, userController.getOneUser)
router.put('/user', authenticateToken, userController.updateUser)
router.delete('/user/:id', authenticateToken, userController.deleteUser)

export default router