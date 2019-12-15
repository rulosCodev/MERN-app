const express = require('express');
const mongoose = require('mongoose');
const router = require('./network/routes');
const bodyParser = require('body-parser');
const { config } = require('./config');

const app = express();

// bodyparser Middleware
app.use(bodyParser.json());

// BD Config

const db = config.dbUri;

// Connect to Mongo

mongoose
  .connect(db, { 
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(()=> console.log('Mongo DB conected...'))
  .catch((err)=> console.log(err));

// Routes
router(app);


  const port = config.port;
app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})


