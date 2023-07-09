const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userPhone: {
    type: String,
    required: true,
  },
  userGmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  UserAgree: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
