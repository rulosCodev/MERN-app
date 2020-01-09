const express = require('express');
const mongoose = require('mongoose');
const router = require('./network/routes');
const bodyParser = require('body-parser');
const { config } = require('./config');
const db = require('./db');

const app = express();

// bodyparser Middleware
app.use(bodyParser.json());

//CORS
app.use((req,res, next)=>{
  res.header('Access-Control-Allow-Origin',"*");
  res.header('Access-Control-Allow-Headers',"*");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 
    'PUT,POST,PATCH,DELETE, GET');
    return res.status(200).json({});
  }
  next()
});

// BD Config


// Connect to Mongo

db(config.dbUri);


// Routes
router(app);


  const port = config.port;
app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})


