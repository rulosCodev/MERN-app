const express = require('express');
const item = require('../components/item/network');
const surgery = require('../components/surgery/network');
// const uploads = require('../components/uploads/network');


const routes = function (server) {
  server.use('/item', item );
  server.use('/surgery', surgery);
  // server.use('/uploads', uploads);

};

module.exports = routes;

