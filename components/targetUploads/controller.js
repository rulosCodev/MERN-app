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

function updateTarget(id, images) {
  return new Promise(async (resolve, reject)=>{
    if(!id || !images){
      return reject('Invalid data');
    }
    const result= await store.update(id, images);
    resolve(result)
  })
}



module.exports = {
  addTarget,
  getTargets,
  updateTarget
}