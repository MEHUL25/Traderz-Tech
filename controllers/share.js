
const Share = require("../models/singleshare");


exports.getAddShare = (req,res,next)=>{
      res.render('admin',{
            path: '/Admin',
            isAuthenticated: req.session.isLoggedIn
      });
};

exports.postAddShare = (req,res,next)=>{

      const name = req.body.name;
      const buyabove = req.body.buyabove;
      
      const callremark = req.body.callremark;
      const calladdeddate = req.body.calladdeddate;
      const hreflink = req.body.hreflink;
      const callactivedate = req.body.callactivedate;
      const target1 = req.body.target1;
      const target1remark = req.body.target1remark;
      const target1activedate = req.body.target1activedate;
      const target2 = req.body.target2;
      const target2remark = req.body.target2remark;
      const target2activedate = req.body.target2activedate;
      const stoploss = req.body.stoploss;
      const stoplossremark = req.body.stoplossremark;
      const stoplossdate  = req.body.stoplossdate;


      //const share = new Share(null,name,buyabove,callremark,calladdeddate,hreflink,callactivedate,target1,target1remark,target1activedate,target2,target2remark,target2activedate,stoploss,stoplossremark,stoplossdate);
      
      const share = new Share(
            {name:name,buyabove:buyabove,callremark:callremark,
            calladdeddate:calladdeddate,hreflink:hreflink,callactivedate:callactivedate,target1:target1,
            target1remark,target1activedate,target2,target2remark,
            target2activedate:target2activedate,stoploss:stoploss,stoplossremark:stoplossremark,stoplossdate:stoplossdate}
            );
            
      share
      .save()
      .then(result => {
            console.log('Created Product');
            res.redirect('/Watchlist');
      })
      .catch(err => {
            console.log(err);
      });
};

exports.getEditProduct = (req, res, next) => {
      
      const test = req.body.name;
      
      Share.findOne({name:test})
      .then( product => 
      {
            console.log(product);
            res.render('editshare', {
            path: '/Admin',
            product: product,
            isAuthenticated: req.session.isLoggedIn
            });
      })
      .catch(err => {
            console.log(err);
            return res.status(404).render('404');;
      });
};

exports.postEditProduct = (req, res, next) => {
      
      const prodId = req.body.productId;
      const updatedname = req.body.name;
      const updatedbuyabove = req.body.buyabove;
      const updatedcallremark = req.body.callremark;
      const updatedcalladdeddate = req.body.calladdeddate;
      const updatedhreflink = req.body.hreflink;
      const updatedcallactivedate = req.body.callactivedate;
      const updatedtarget1 = req.body.target1;
      const updatedtarget1remark = req.body.target1remark;
      const updatedtarget1activedate = req.body.target1activedate;
      const updatedtarget2 = req.body.target2;
      const updatedtarget2remark = req.body.target2remark;
      const updatedtarget2activedate = req.body.target2activedate;
      const updatedstoploss = req.body.stoploss;
      const updatedstoplossremark = req.body.stoplossremark;
      const updatedstoplossdate  = req.body.stoplossdate;
      
      Share.findById(prodId)
            .then(share => 
            {
                  share.name = updatedname;
                  share.buyabove = updatedbuyabove;
                  share.callremark = updatedcallremark;
                  share.calladdeddate = updatedcalladdeddate;
                  share.hreflink = updatedhreflink;
                  share.callactivedate = updatedcallactivedate;
                  share.target1 = updatedtarget1;
                  share.target1remark = updatedtarget1remark;
                  share.target1activedate = updatedtarget1activedate;
                  share.target2 = updatedtarget2;
                  share.target2remark = updatedtarget2remark;
                  share.target2activedate = updatedtarget2activedate;
                  share.stoploss = updatedstoploss;
                  share.stoplossremark = updatedstoplossremark;
                  share.stoplossdate = updatedstoplossdate;

                  return share.save();
            })
            .then(result => {
                  res.redirect('/Watchlist');
            })
            .catch(err => console.log(err));


    };


