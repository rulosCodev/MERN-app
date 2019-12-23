const Model = require('./model');



function addSurgery(fullSurgery) {
  const surgeryModel = new Model(fullSurgery);
  return surgeryModel.save()
 
};

async function getSurgeries() {
  const surgeriesList = await Model.find().sort({date: -1});
  return surgeriesList;
}
// async function removeItem(id){
//   return Model.deleteOne({
//     _id: id
//   })
// }


module.exports = {
  list: getSurgeries,
  add: addSurgery,
  // remove: removeItem,

}