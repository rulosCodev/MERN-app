const express = require('express');
const router = require('./network/routes');
const fileUpload = require('express-fileupload');

const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridfsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require ('method-override');

const bodyParser = require('body-parser');
const { config } = require('./config');
const db = require('./db');

const app = express();

// bodyparser Middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'));



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
const conn = mongoose.createConnection(config.dbUri2);

// Init gfs 
let gfs;
conn.once('open', ()=>{
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridfsStorage({
  url: config.dbUri2,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });


// Routes

app.post('/upload',upload.single('file'), (req, res) => {
  res.json({
    "files": req.file
  })
})
app.get('/upload', (req, res) => {
  gfs.files.find().toArray((err, files)=>{
    // Check if files 
    if(!files || files.length === 0) {
     return res.status(404).json({
       err: "not files exists"
     })
    }
 
 
    // Files exist
    return res.json(files)
   });
})
app.get('/image/:filename', (req,res)=>{
  gfs.files.findOne({ filename: req.params.filename}, (err, file)=> {
     // Check if files 
   if(!file || file.length === 0) {
    return res.status(404).json({
      err: "not file exists"
    })
   }
   
   // Check if image 
   if(file.contentType === 'image/jpeg' || file.contentType === 'image/png' ) {
     // Read output to browser

     const readstream = gfs.createReadStream(file.filename);
     readstream.pipe(res);

   } else {
     res.status(404).json({
       err: "Not an image"
     })
   }
  });
});
router(app);
  const port = config.port;
app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})


