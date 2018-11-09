const express = require('express');
const routes = express.Router();

routes.get('/orders', (req, res, next) => {
  res.json({ foo: 'bar' });
});

module.exports = routes;
