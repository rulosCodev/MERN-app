const store = require('./store');

function getItems() {
  return store.list()
}


function addItem(name) {
  if(!name) {
    return Promise.reject('Invalid name');
  }
  const item = {
    name,
  };

  return store.add(item)
}

function deleteItem(id) {
  return new Promise(async(resolve, reject)=>{
    if(!id) {
      return reject('Invalid data');
    }

    try{
      const deletedItem = await store.remove(id);
      resolve(deletedItem)
    }
    catch(err){
      reject(err)
    }
  })
}

module.exports = {
  getItems,
  addItem,
  deleteItem,
}