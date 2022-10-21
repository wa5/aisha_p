require('dotenv').config();
require('./config/db.config')
import express from 'express'
var app=express()
const path=require('path')
const cors=require('cors')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
 require("./src/middleware/auth/passort");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//logger
const { logger } = require('./src/middleware/logfiles/logEvents');
const  errorHandler  = require('./src/middleware/logfiles/errorHandler');
const endPont=require('./src/routes')
const passport = require("passport");
const cookieSession = require("cookie-session");

app.use(bodyParser.json());
const fs = require("fs");
app.use(fileUpload())

app.use(
  cookieSession({ name: "session", keys: ["aisha"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin:'*',
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  }))
  app.use("/images", express.static(__dirname + "src/public/images"))
  app.use(logger);
  app.use(express.static(path.join(__dirname, 'src/public')))




app.use(logger);
//apis
app.use('/api',endPont.fbcall)
app.use('/api',endPont.fbcallback)
app.use('/api',endPont.extrainfocheck)
app.use('/api',endPont.gmailregister)
app.use('/api',endPont.gmaillogin)
app.use('/api',endPont.googlecallback)
app.use('/api',endPont.googlecall)
app.use('/api',endPont.extraInfoCheckForGoogle)
app.use('/api',endPont.sellerUploadProducts)


app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
  });
  app.use(errorHandler);
app.listen(8001,()=>{console.log('server started at 8001')})