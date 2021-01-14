const mongoose = require('mongoose');

const AccessorySchema = mongoose.Schema({
  type: { type: String, enum: ['Sunglasses', 'Jewellery', 'Bags', 'Watches', 'Ties', 'Caps']},
  price: { type: Number},
  description: { type: String},
});

module.exports = mongoose.model('Accessory', AccessorySchema);
