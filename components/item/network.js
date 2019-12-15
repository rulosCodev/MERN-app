
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

// @route GET single /item
// @desc Get All Items
// @access Public

router.get('/', async (req, res)=>{
  try {
    const itemsList = await controller.getItems();
    response.success(req, res, itemsList, 200)
  }
  catch(err) {
    response.error(req,res, 'Internal error', err)
  }
})

router.post('/', async (req, res)=>{
  const {name} = req.body;
  try {
    const fullItem = await controller.addItem(name)
    response.success(req, res, fullItem, 201 )
  }
  catch (err) {
    response.error(req, res, 'Internal Error', 400, err )
  }
});

router.delete('/:id', async(req, res)=>{
  try {
    await controller.deleteItem(req.params.id);
    response.success(req, res, `Item: ${req.params.id} deleted`, 200);
  }
  
  catch (error) {
    response.error(req, res, 'Internal Error',500, error);
  }
})







module.exports = router;

