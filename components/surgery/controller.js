const store = require('./store');

function getSurgeries() {
  return store.list()
}


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

// function deleteItem(id) {
//   return new Promise(async(resolve, reject)=>{
//     if(!id) {
//       return reject('Invalid data');
//     }

//     try{
//       const deletedItem = await store.remove(id);
//       resolve(deletedItem)
//     }
//     catch(err){
//       reject(err)
//     }
//   })
// }

module.exports = {
  addSurgery,
  getSurgeries,
  // deleteItem,
}