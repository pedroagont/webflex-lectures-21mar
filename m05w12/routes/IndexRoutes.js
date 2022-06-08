const express = require('express');

const router = express.Router();

const { IndexController } = require('../controllers');

// ----------------------- ROUTES / ENDPOINTS
router.get('/', IndexController.helloWorld);
router.get('/home', IndexController.homepage);

module.exports = router;
