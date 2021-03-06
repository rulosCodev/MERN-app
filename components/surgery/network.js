
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller.js');
const router = express.Router();

// @route GET single /item
// @desc Get All Items
// @access Public

router.get('/', async (req, res)=>{
  try {
    const surgeriesList = await controller.getSurgeries();
    response.success(req, res, surgeriesList, 200)
  }
  catch(err) {
    response.error(req,res, 'Internal error', err)
  }
})

router.post('/', async (req, res)=>{
  const {sex, age, diagnosis, surgery} = req.body;
  try {
    const fullSurgery = await controller.addSurgery(sex, age, diagnosis, surgery);
    response.success(req, res, fullSurgery, 201 )
  }
  catch (err) {
    response.error(req, res, 'Internal Error', 400, err )
  }
});

router.delete('/:id', async(req, res)=>{
  try {
    await controller.deleteSurgery(req.params.id);
    response.success(req, res, `Surgery: ${req.params.id} deleted`, 200);
  }
  
  catch (error) {
    response.error(req, res, 'Internal Error',500, error);
  }
})
// router.delete('/:id', async(req, res)=>{
//   try {
//     await controller.deleteItem(req.params.id);
//     response.success(req, res, `Item: ${req.params.id} deleted`, 200);
//   }
  
//   catch (error) {
//     response.error(req, res, 'Internal Error',500, error);
//   }
// })







module.exports = router;

