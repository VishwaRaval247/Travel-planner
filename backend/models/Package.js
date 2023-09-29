// package.model.js
const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  photo: String,
  destinations: [{ name: String,
    description: String,}],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  availability: String, 
  inclusions: [String],
  exclusions: [String], 
  duration: String,
  featured: Boolean, 
  tags: [String], 
  additionalInfo: String,
});

module.exports = mongoose.model('Package', packageSchema);
