const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model('item', ItemSchema);
module.exports = model;
