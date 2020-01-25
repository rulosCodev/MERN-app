const store = require('./store');




function addTarget(surgeryid, imageid) {
  if(!surgeryid || !imageid) {
    return Promise.reject('Invalid data');
  }
  const fullTarget = {
    surgeryid,
    imageid
  };

  return store.add(fullTarget)
}

function getTargets(filterTarget) {
  return new Promise((resolve, reject)=>{
    resolve(store.list(filterTarget))
  })
}



module.exports = {
  addTarget,
  getTargets
}