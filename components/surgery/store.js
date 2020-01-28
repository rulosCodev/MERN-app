const Model = require('./model');



function addSurgery(fullSurgery) {
  const surgeryModel = new Model(fullSurgery);
  return surgeryModel.save()
 
};

async function getSurgeries(surgeryid) {
  let filter = {};
    if (surgeryid) {
      filter= {
        _id: surgeryid,      
      }
    }
  const surgeriesList = await Model.find(filter).sort({date: -1});
  return surgeriesList;
}


async function removeSurgery(id){
  return Model.deleteOne({
    _id: id
  })
}


module.exports = {
  list: getSurgeries,
  add: addSurgery,
  remove: removeSurgery,

}