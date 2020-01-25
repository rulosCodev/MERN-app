const Grid = require('gridfs-stream');
const mongoose = require('mongoose');

const { config } = require('./config');


const conn = mongoose.createConnection(config.dbUri2);

// Init gfs 
let gfs;
conn.once('open', ()=>{
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine


module.exports = {
  conn,
  gfs
};
