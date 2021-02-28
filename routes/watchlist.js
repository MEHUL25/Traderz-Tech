const express = require('express');
const router = express.Router();

const shareController = require('../controllers/search');

router.get('/Watchlist',shareController.getAllshares);

router.post('/Watchlist',shareController.searchAllshares);

module.exports= router;


