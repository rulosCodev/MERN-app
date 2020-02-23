const Grid = require('gridfs-stream');
const mongoose = require('mongoose');

const { config } = require('../../config');


const conn = mongoose.createConnection(config.dbUri2);

// Init gfs 
let gfs;
conn.once('open', ()=>{
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
function getUploads() {
  const files = gfs.files.find().toArray((err, files)=>{
    // Check if files 
    if(!files || files.length === 0) {
     return res.status(404).json({
       err: "not files exists"
     })
    }
    // Files exist
    return files
   });
   return files
}
 function updateUpload(id, image) {
  const files = gfs.files.findOne({_id: id}).toArray((err, files)=>{
    // Check if files 
    if(!files || files.length === 0) {
     return res.status(404).json({
       err: "not files exists"
     })
    }
  });
  files.imageid = image;
  const newUpload =  files.save();

  return newUpload;
}
  


module.exports = {
  list: getUploads,
  update: updateUpload
}

