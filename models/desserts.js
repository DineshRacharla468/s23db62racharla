const mongoose = require('mongoose');

const dessertsSchema = new mongoose.Schema({
  Name: {
    type: String,
    minlength: 3,
    maxlength: 20,
  },

  Calories: String,
  Price: {
    type: Number,
    min: 5,
    max: 399,
  },
});

module.exports = mongoose.model('desserts', dessertsSchema);
