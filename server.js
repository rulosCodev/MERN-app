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

<<<<<<< HEAD
//Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}

=======
// server listen
>>>>>>> 579779df07b158f2cd7b15cca172642b6e8b4fb7
const port = config.port;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
})


