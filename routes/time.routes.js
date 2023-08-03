const Router = require('express');
const router = new Router();
const timeController = require('../controller/time.controller');

router.post('/times', timeController.createTime)
router.get('/times', timeController.getTime)
router.patch('/times', timeController.updateTime)

module.exports = router