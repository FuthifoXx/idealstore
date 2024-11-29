const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  price: { type: String },
  availability: { type: Boolean },
  category: { type: String },
});

module.exports = mongoose.model('shop', shopSchema);
