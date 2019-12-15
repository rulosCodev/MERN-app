const Model = require('./model');

async function getItems() {
  const items = await Model.find().sort({date: -1});
  return items;
}
function addItem(item) {
  const itemModel = new Model(item);
  return itemModel.save()
 
};
async function removeItem(id){
  return Model.deleteOne({
    _id: id
  })
}


module.exports = {
  list: getItems,
  add: addItem,
  remove: removeItem,

}