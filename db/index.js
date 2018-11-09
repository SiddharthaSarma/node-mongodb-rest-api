require('dotenv').config();
const mongoose = require('mongoose');
const userName = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
mongoose
  .connect(
    `mongodb://${userName}:${password}@ds235053.mlab.com:35053/shopping-cart`,
    {
      useNewUrlParser: true
    }
  )
  .then(console.log('connected to database successfully'))
  .catch(err => console.log(err));
