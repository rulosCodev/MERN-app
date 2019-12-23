const express = require('express');
const item = require('../components/item/network');
const surgery = require('../components/surgery/network');


const routes = function (server) {
  server.use('/item', item );
  server.use('/surgery', surgery);
};

module.exports = routes;

