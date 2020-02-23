const store = require('./store');

function getUploads() {
  console.log(store.list())
  return 'hola hola'
}

function updateUpload(id, targetid) {
  return new Promise(async (resolve, reject)=>{
    if(!id || !targetid){
      return reject('Invalid data');
    }
    const result= store.update(id, targetid);
    resolve(result)
  })
}

module.exports = {
  getUploads,
  updateUpload

}