

const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(sendgridTransport({

      auth:{
            api_key:`${process.env.SEND_GRID_KEY}`
      }

}));

exports.sendEMail = (req,res,next)=>{
      const sender = req.body.email;
      const subject = req.body.subject;
      var contents = req.body.contents;
      transporter.sendMail({
            to: `${process.env.RECEIVER_EMAIL}`,
            from : `${process.env.SENDER_EMAIL}`,
            subject : subject,
            text: contents})
      .then( result =>{
            console.log('Mail sent!!!!');
            res.redirect('/');
      })
      .catch(err => console.log(err));
      
};