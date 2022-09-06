require('dotenv').config();
import express from 'express'
const fileUpload = require('express-fileupload');
const url2='mongodb://127.0.0.1:27017/ovp';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var app=express()

const endPont=require('./src/routes')
app.use(bodyParser.urlencoded({ extended: true }));
const path=require('path')
const cors=require('cors')
const ejs=require('ejs')

const { logger } = require('./src/middleware/logEvents');
const errorHandler = require('./src/middleware/errorHandler');
const session=require('express-session')
const MongoDBStore = require("connect-mongodb-session")(session);
const {requireAuth,checkUser} =require('./src/middleware/auth') 
app.use(bodyParser.json());
const fs = require("fs");
app.use(fileUpload())
app.use(cors({
  origin:'*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}))
// custom middleware logger

const store = new MongoDBStore({
    uri: url2,
    collection: "mySessions",
  });

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'src/views'))
app.use(logger);
app.use(express.static(path.join(__dirname, 'src/public')))


  app.use(cookieParser());
app.use(session({
    secret:'my secrate key',
    resave: false,
    saveUninitialized: false,
    store: store,
  
}))
app.use('*', checkUser);
app.use('/api',endPont.login)
app.use('/api',endPont.logout)
app.use('/api',endPont.home)
app.use('/api',endPont.register)
app.use('/api',endPont.allusers)





















app.get('/a',requireAuth,(req:any,res:any)=>{
    
    
    res.send('hello')
})







app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
      res.render('404');
  } else if (req.accepts('json')) {
      res.json({ "error": "404 Not Found" });
  } else {
      res.type('txt').send("404 Not Found");
  }
});

app.use(errorHandler);

app.listen(8000,()=>{console.log("server started 8000")})