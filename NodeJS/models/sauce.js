// request statement for mongoose
const mongoose = require('mongoose');
//the model for sauce
const sauceSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  lenses: { type: [String], required: true },
  imageUrl: { type: String, required: true }
});
//export this sauce
module.exports = mongoose.model('Sauce', sauceSchema);