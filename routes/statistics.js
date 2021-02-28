const express = require('express');
const rooDir=require('../util/path');
const router = express.Router();


router.get('/Statistics',(req,res,next)=>{
      res.render('statistics',{
            path: '/Statistics',
            isAuthenticated: req.session.isLoggedIn
      });
});

module.exports = router;