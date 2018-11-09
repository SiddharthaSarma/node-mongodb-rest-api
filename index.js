require('./db');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const users = require('./routes/users');
const orders = require('./routes/orders');
const products = require('./routes/products');

const app = express();
app.disable('x-powered-by');
app.use(express.json());
app.use(cors());

app.use('/api/users', users);
app.use('/api/orders', orders);
app.use('/api/products', products);

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
