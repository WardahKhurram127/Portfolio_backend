const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number, // out of 100, typically
    required: true,
    min: 0,
    max: 100
  }
});

module.exports = mongoose.model('Skill', skillSchema);
