const express = require('express');
const item = require('../components/item/network');


const routes = function (server) {
  server.use('/item', item );
};

module.exports = routes;

