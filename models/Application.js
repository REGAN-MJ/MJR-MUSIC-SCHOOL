const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  oname: { type: String },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  tel1: { type: String, required: true },
  tel2: { type: String },
  location: { type: String, required: true },
  grade: { type: String },
  email: { type: String },
  instrument: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);
