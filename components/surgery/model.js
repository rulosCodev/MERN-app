const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema

const surgerySchema = new Schema({

  sex: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  diagnosis: {
    type: String,
    required: true
  },

  surgery: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model('surgeries',surgerySchema);
module.exports = model;
