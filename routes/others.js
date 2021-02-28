const express = require('express');
const rooDir=require('../util/path');
const router = express.Router();
const otherController = require('../controllers/contact');

router.get('/Others',(req,res,next)=>{
      res.render('others',{
            path:'/Others',
            isAuthenticated: req.session.isLoggedIn
      });
});

router.post('/Others',otherController.sendEMail);


module.exports = router;