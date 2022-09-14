require('dotenv').config();
require('./config/db.config')
import express from 'express'
var app=express()
const path=require('path')
const cors=require('cors')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({ extended: true }));
//logger
const { logger } = require('./src/middleware/logfiles/logEvents');
const  errorHandler  = require('./src/middleware/logfiles/errorHandler');


app.use(cors({
    origin:'*',
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  }))





app.use(logger);
//apis

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