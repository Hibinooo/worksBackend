const Router = require('express');
const router = new Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.login)
router.get('/times', authController.getTime)
router.patch('/times', authController.updateTime)

module.exports = router