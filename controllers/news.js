
const NewsEmail = require("../models/news");


exports.postAddEmail = (req,res,next)=>{

      
      const email = req.body.email;


      //const share = new Share(null,name,buyabove,callremark,calladdeddate,hreflink,callactivedate,target1,target1remark,target1activedate,target2,target2remark,target2activedate,stoploss,stoplossremark,stoplossdate);
      
      const news = new NewsEmail(
            {email:email}
            );
            
      news
      .save()
      .then(result => {
            console.log('Email Added');
            res.redirect('/Watchlist');
      })
      .catch(err => {
            console.log(err);
      });
};


exports.postSendNotification = (req, res, next) => {
      
      ;
    };


