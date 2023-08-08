const Router = require('express');
const router = new Router();
const workController = require('../controllers/work.controller');

router.get('/work', workController.getWork)
router.post('/work', workController.createWork)

module.exports = router