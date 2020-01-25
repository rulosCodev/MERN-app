const Model = require('./model');



function addTarget(fullSurgery) {
  const targetModel = new Model(fullSurgery);
  return targetModel.save()
 
};

async function getTargets(filterTarget) {
    let filter = {};
    if(filterTarget) {
      filter = { surgeryid:filterTarget }
    }
  const getTargetsList = await Model.find(filter).sort({date: -1});
  return getTargetsList;
}



module.exports = {
  add: addTarget,
  list: getTargets
}