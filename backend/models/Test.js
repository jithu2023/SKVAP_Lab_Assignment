const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
}, { timestamps: true });

module.exports = mongoose.model('Test', testSchema);
