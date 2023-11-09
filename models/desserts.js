const mongoose = require('mongoose');

const dessertsSchema = new mongoose.Schema({
  Name: String,
  Calories: String,
  Price: Number,
});

module.exports = mongoose.model('desserts', dessertsSchema);
