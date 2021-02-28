const express = require('express');
const router = express.Router();


router.get('/Guidelines',(req,res,next)=>{
      res.render('guidelines',{
            path:'/Guidelines',
            isAuthenticated: req.session.isLoggedIn
      });
});

module.exports = router;