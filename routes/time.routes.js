const Router = require('express');
const router = new Router();
const timeController = require('../controller/time.controller');

router.post('/time', timeController.createTime)
router.get('/time', timeController.getTime)

module.exports = router