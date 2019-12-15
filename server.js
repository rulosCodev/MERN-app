const express = require('express');
const mongoose = require('mongoose');
const router = require('./network/routes');
const bodyParser = require('body-parser');
const { config } = require('./config');
const db = require('./db');

const app = express();

// bodyparser Middleware
app.use(bodyParser.json());

// BD Config


// Connect to Mongo

db(config.dbUri);


// Routes
router(app);


  const port = config.port;
app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})


