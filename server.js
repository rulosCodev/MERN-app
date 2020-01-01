const express = require('express');
const mongoose = require('mongoose');
const router = require('./network/routes');
const bodyParser = require('body-parser');
const { config } = require('./config');
const db = require('./db');
const path = require('path');
const app = express();

// bodyparser Middleware
app.use(bodyParser.json());

// BD Config


// Connect to Mongo

db(config.dbUri);


// Routes
router(app);

//Serve static assets if in production

if(process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/dist'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  } )
}

  const port = config.port;
app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})


