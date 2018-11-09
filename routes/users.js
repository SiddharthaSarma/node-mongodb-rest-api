const express = require('express');
const routes = express.Router();

routes.get('/', (req, res, next) => {
  return res.json({ foo: 'bar' });
});

module.exports = routes;
