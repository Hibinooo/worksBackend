import express from 'express';
import userController from '../controllers/user.controller.js';
const router = express.Router();

router.post('/user', userController.createUser)
// router.get('/user', userController.getUsers)
// router.get('/user/:id', userController.getOneUser)
// router.put('/user', userController.updateUser)
// router.delete('/user/:id', userController.deleteUser)

export default router