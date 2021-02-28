const bcrypt = require('bcryptjs');
var hashedPass="";
var hashedemail="";
const admin = `${process.env.ADMIN_USERNAME}`;
const adminPassword = `${process.env.ADMIN_PASSWORD}`;

function encrypt(pass)
{
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(pass, salt);
      return hash;
}

exports.getLogin = (req,res,next)=>{
      
      hashedPass =  encrypt(adminPassword);
      hashedemail = encrypt(admin);
      res.render('auth',{
            path:'/Login',
            isAuthenticated: false
      });
};

exports.postLogin = (req,res,next)=>{

      
      
      const useremail = req.body.username;
      const userpassword = req.body.password;

      if(bcrypt.compareSync(useremail, hashedemail))
      {
                  if (bcrypt.compareSync(userpassword, hashedPass))
                  {
                         req.session.isLoggedIn = true;
                        return req.session.save(err => 
                        {
                              console.log(err);
                              res.redirect('/');
                        });
                  }
                  else
                  {
                        res.redirect('/login');
                  }
      }
      else
      {
            res.redirect('/login');
      }
      

      
      
};

exports.postLogout = (req,res,next)=>{

      req.session.destroy(err=> { 
            console.log(err);
            res.redirect('/');
      });
};


