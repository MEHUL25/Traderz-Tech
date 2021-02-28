const express = require('express');
const router= express.Router();
const isAuth = require('../middleware/is-auth');

const shareController = require('../controllers/share');


router.get('/',isAuth,shareController.getAddShare);

router.get('/add-share',isAuth,(req,res,next)=>{
      
      res.render('addshare',{
            path:'/Admin',
            isAuthenticated: req.session.isLoggedIn
      });
});

router.get('/edit',isAuth,(req,res,next)=>{
      res.render('edit',{
            path:'/Admin',
            isAuthenticated: req.session.isLoggedIn
      });
});

router.get('/edit-share',isAuth,(req,res,next)=>{
      res.render('editshare',{
            path:'/Admin',
            isAuthenticated: req.session.isLoggedIn
      });
});

router.post('/edit',isAuth,shareController.getEditProduct);

router.post('/edit-share',isAuth,shareController.postEditProduct);

router.post('/add-share',isAuth,shareController.postAddShare);



module.exports = router;


