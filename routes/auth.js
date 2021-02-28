const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');



router.get('/Login',authController.getLogin);

router.post('/Login',authController.postLogin);

router.post('/Logout',authController.postLogout);



module.exports = router;