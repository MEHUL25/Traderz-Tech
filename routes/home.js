const express = require('express');
const path=require('path');
const rooDir=require('../util/path');
const router = express.Router();


router.get('/',(req,res,next)=>{
      res.render('home',{
            path:'/',
            isAuthenticated: req.session.isLoggedIn
      });
});


module.exports = router;