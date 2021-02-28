const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news');

router.post('/AddEmail',newsController.postAddEmail);


module.exports = router;