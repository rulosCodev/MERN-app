const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema

const targetSchema = new Schema({

  surgeryid: {
    type: String,
    required: true
  },

  imageid: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model('target',targetSchema);
module.exports = model;
