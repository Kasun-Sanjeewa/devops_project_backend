const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/getTask', controller.getTask);
router.post('/addTask', controller.addTask);


module.exports = router;