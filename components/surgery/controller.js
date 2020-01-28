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
    pre: {
      images: [],
      observation: ''
    },
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