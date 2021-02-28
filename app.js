const dotenv = require('dotenv');
dotenv.config();
const express= require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app=express();
const path=require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const helmet = require('helmet');
const compression = require('compression');
const MongoDBStore = require('connect-mongodb-session')(session);
const morgan = require('morgan');

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.nisq8.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`;  //?retryWrites=true&w=majority
const mongoose = require('mongoose');
const store = new MongoDBStore({
      uri: MONGODB_URI,
      collection: 'sessions'
    });

app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');
const newRoutes = require('./routes/news');
const othersRoutes = require('./routes/others');
const statisticsRoutes = require('./routes/statistics');
const guidelinesRoutes = require('./routes/guidelines');
const watchlistRoutes = require('./routes/watchlist');
const loginRoutes = require('./routes/auth');


app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(
      session({
            secret: 'This is a secrett',
            resave:false,
            saveUninitialized:false,
            store:store
      })
);

const accessLogStream = fs.createWriteStream(
      path.join(__dirname, 'access.log'),
      { flags: 'a' }
    );

app.use(helmet());
//app.use(compression());
app.use(morgan('combined', { stream: accessLogStream }));


app.use('/admin',adminRoutes);
app.use(othersRoutes);
app.use(newRoutes);
app.use(statisticsRoutes);
app.use(guidelinesRoutes);
app.use(watchlistRoutes);
app.use(homeRoutes);
app.use(loginRoutes);



const errorController = require('./controllers/error');
app.use(errorController.get404);


mongoose
  .connect(MONGODB_URI)
  .then(result => {
      console.log("Connected to DB");
      app.listen(process.env.PORT || 3000,()=>{
            console.log(`Server running at http://localhost:${3000}/`);
      });
  })
  .catch(err => {
    console.log(err);
  });

  

/*  
(async () => 
      {
            const connector = mongoose.connect(connectionString)
            let username = await connector.then(async () => 
            {
                  console.log("Connected to DB");
                  app.listen(3000,()=>{
                        console.log(`Server running at http://localhost:${3000}/`);
                  });
            })
      
      })()

*/




/*

mongoose.connect('mongodb+srv://mehul1:mehul251@cluster0.nisq8.mongodb.net/testdb?retryWrites=true&w=majority'
      )
      .then(result =>{
            app.listen(3000,()=>{
                  console.log(`Server running at http://localhost:${3000}/`);
            });
      })
      .catch(err =>{
            console.log(err);
      });
      

mongoConnect(client =>{

      console.log(client);
      app.listen(3000,()=>{
            console.log(`Server running at http://localhost:${3000}/`);
      });
});

*/


/*


const express = require("express");

const app = express();

app.get("/",(req,res)=> {
      res.send("Hello from the other side");
});

app.get("/about",(req,res)=> {
      res.send("Hello from the About side");
});


app.listen(8000,()=>{
      console.log(`Server running at http://localhost:${8000}/`);
});

http://localhost:3000/

*/

