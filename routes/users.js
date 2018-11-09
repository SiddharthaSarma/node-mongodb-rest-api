const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ foo: 'bar' });
});

routes.post('/signin', (req, res) => {
  return res.json({ foo: 'bar' });
});

routes.post('/register', (req, res) => {
  return res.json({ foo: 'bar' });
});

routes.delete('/:userId', (req, res) => {
  return res.json({ foo: 'bar' });
});

module.exports = routes;
