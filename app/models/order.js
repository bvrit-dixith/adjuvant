var mongoose = require("mongoose");

var orderSchema = new mongoose.Schema({
  date: { type: Date },
  employeeId: String,
  drinkName: String,
  quantity: { type: Number }
});

module.exports = mongoose.model('Order', orderSchema);

