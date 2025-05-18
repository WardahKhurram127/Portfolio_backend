const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  startDate: {
    type: String, 
    required: true,
  },
  endDate: {
    type: String, // or Date if you want
    required: false,
  },
  description: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model('Experience', experienceSchema);
