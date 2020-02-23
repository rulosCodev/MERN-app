const response = require('../../network/response');
const express = require('express');
const router = express.Router();
const upload = require('./storage');
// @route GET single /item
// @desc Get All Items
// @access Public
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');

const { config } = require('../../config');
const controller = require('./controller');

const conn = mongoose.createConnection(config.dbUri2);

// Init gfs 
let gfs;
conn.once('open', ()=>{
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});


// ADD FILE
router.post('/',upload.single('file'), (req, res) => {
  response.success(req, res, req.file)
})


// PATCH UPLOAD

router.patch('/:filename', (req,res)=>{
  const {_id} = req.body
 
   gfs.files.update(
     {"_id" : "5e2c57a3a4381152c7a78fd9" },
     {$set : {"targetid":8}},
   (err, file)=> {
    // Check if files 
  if(!file) {
   return res.status(404).json({
     err: "not file exists"
   })
  }
  // File exists
  return response.success(req, res, file, 200);
 })
   // File exists
});
// GET ALL UPLOADS
router.get('/', async (req, res)=>{
  gfs.files.find().sort({uploadDate: -1}).toArray((err, files)=>{
    // Check if files 
    if(!files || files.length === 0) {
     return res.status(404).json({
       err: "not files exists"
     })
    }
 
 
    // Files exist
    return response.success(req, res, files, 200)
   });
})

// GET ON UPLOAD
router.get('/:filename', (req,res)=>{
  gfs.files.findOne({ filename: req.params.filename}, (err, file)=> {
     // Check if files 
   if(!file || file.length === 0) {
    return res.status(404).json({
      err: "not file exists"
    })
   }
   // File exists
   return response.success(req, res, file, 200);
  });
});

// SHOW IMAGE
router.get('/show/:filename', (req,res)=>{
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

// DELETE UPLOAD
router.delete('/:id', (req, res) => {
  gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ err: err });
    }

    response.success(req, res, 'removed');
  });
});

module.exports = router


// app.post('/upload',upload.single('file'), (req, res) => {
  //   res.json({
  //     "files": req.file
  //   })
  // })
  // app.get('/upload', (req, res) => {
  //   gfs.files.find().toArray((err, files)=>{
  //     // Check if files 
  //     if(!files || files.length === 0) {
  //      return res.status(404).json({
  //        err: "not files exists"
  //      })
  //     }
   
   
  //     // Files exist
  //     return res.json(files)
  //    });
  // })
  // app.get('/image/:filename', (req,res)=>{
  //   gfs.files.findOne({ filename: req.params.filename}, (err, file)=> {
  //      // Check if files 
  //    if(!file || file.length === 0) {
  //     return res.status(404).json({
  //       err: "not file exists"
  //     })
  //    }
     
  //    // Check if image 
  //    if(file.contentType === 'image/jpeg' || file.contentType === 'image/png' ) {
  //      // Read output to browser
  
  //      const readstream = gfs.createReadStream(file.filename);
  //      readstream.pipe(res);
  
  //    } else {
  //      res.status(404).json({
  //        err: "Not an image"
  //      })
  //    }
  //   });
  // });
