const store = require('./store');




function addSurgery(sex, age, diagnosis, surgery) {
  if(!sex || !age || !diagnosis || !surgery) {
    return Promise.reject('Invalid data');
  }
  const fullSurgery = {
    sex,
    age,
    diagnosis,
    surgery,
  };

  return store.add(fullSurgery)
}

function getSurgeries() {
  return store.list()
}

function deleteSurgery(id) {
  return new Promise(async(resolve, reject)=>{
    if(!id) {
      return reject('Invalid data');
    }

    try{
      const deletedSurgery = await store.remove(id);
      resolve(deletedSurgery)
    }
    catch(err){
      reject(err)
    }
  })
}

module.exports = {
  addSurgery,
  getSurgeries,
  deleteSurgery,
}