const express = require('express');
const router = require('./network/routes');
const methodOverride = require('method-override');


const bodyParser = require('body-parser');
const { config } = require('./config');
const db = require('./db');
const app = express();

// bodyparser Middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'));



//CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
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

// server listen
const port = config.port;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
})


