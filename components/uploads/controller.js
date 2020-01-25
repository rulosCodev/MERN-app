const store = require('./store');

function getUploads() {
  console.log(store.list())
  return 'hola hola'
}

module.exports = {
  getUploads
}