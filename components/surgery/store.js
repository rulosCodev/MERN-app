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
async function updatesurgery(id, image) {
  const foundSurgery = await Model.findOne({
    _id: id
  });
  foundSurgery.preimages = [image, ...foundSurgery.preimages];
  const newSurgery = await foundSurgery.save();
  console.log(newSurgery)

  return newSurgery;
}


module.exports = {
  list: getSurgeries,
  add: addSurgery,
  remove: removeSurgery,
  update: updatesurgery

}