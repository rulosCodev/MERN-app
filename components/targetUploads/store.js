const Model = require('./model');



function addTarget(fullSurgery) {
  const targetModel = new Model(fullSurgery);
  return targetModel.save()
 
};

async function getTargets(filterTarget) {
    let filter = {};
    if(filterTarget) {
      filter = { surgeryid: filterTarget }
    }
  const getTargetsList = await Model.find(filter).sort({date: -1});
  return getTargetsList;
}

async function updateTarget(id, image) {
  const foundTarget = await Model.findOne({
    _id: id
  });
  foundTarget.imageid = [image, ...foundTarget.imageid];
  const newTarget = await foundTarget.save();

  return newTarget;
}



module.exports = {
  add: addTarget,
  list: getTargets,
  update: updateTarget,
}