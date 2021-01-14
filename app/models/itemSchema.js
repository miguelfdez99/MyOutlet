const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  type: { type: String, enum: ['HOODIE','T-SHIRT','JEANS','JOGGERS','JACKET','SHOES','TROUSERS','SHIRTS']},
  size: { type: String, enum: ['XS','S','M','L','XL','XXL','XXXL']},
  brand: { type: String, enum: ['ADIDAS', 'ASICS','FILA','JOMA','KAPPA','NIKE', 'PUMA', 'NEW_BALANCE']},
  color: { type: String, enum: ['WHITE','BLACK','BLUE', 'RED', 'GREEN', 'YELLOW', 'PURPLE', 'BROWN', 'MULTICOLOR']},
  price: { type: Number},
  season: { type: String, enum: ['SPRING_SUMMER', 'FALL_WINTER']},
});

module.exports = mongoose.model('Item', ItemSchema);
