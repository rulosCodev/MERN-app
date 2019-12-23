const Model = require('./model');

// async function getItems() {
//   const items = await Model.find().sort({date: -1});
//   return items;
// }
function addSurgery(fullSurgery) {
  const surgeryModel = new Model(fullSurgery);
  return surgeryModel.save()
 
};
// async function removeItem(id){
//   return Model.deleteOne({
//     _id: id
//   })
// }


module.exports = {
  // list: getItems,
  add: addSurgery,
  // remove: removeItem,

}