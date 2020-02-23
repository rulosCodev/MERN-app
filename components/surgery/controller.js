const store = require('./store');




function addSurgery(sex, age, diagnosis, surgeryprocess) {
  if(!sex || !age || !diagnosis || !surgeryprocess) {
    return Promise.reject('Invalid data');
  }
  const fullSurgery = {
    sex,
    age,
    diagnosis,
    surgeryprocess,
    preimages:[] ,
    intra: {
      images: [],
      observation: ''
    },
    post: {
      images: [],
      observation: ''
    }
  };

  return store.add(fullSurgery)
}

function getSurgeries(surgeryid) {
  return store.list(surgeryid)
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

function updateSurgery(id, image) {
  return new Promise(async (resolve, reject)=>{
    if(!id || !image){
      return reject('Invalid data');
    }
    const result= await store.update(id, image);
    resolve(result)
  })
}

module.exports = {
  addSurgery,
  getSurgeries,
  deleteSurgery,
  updateSurgery
}