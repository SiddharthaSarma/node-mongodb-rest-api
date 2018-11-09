const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: Number,
  password: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model('users', userSchema);
