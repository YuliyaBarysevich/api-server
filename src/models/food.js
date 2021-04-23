'use strict'

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  product: { type: String, required: true },
  calories: { type: Number, required: true },
  price: { type: Number, required:true }
});

const foodModel = mongoose.model('food', foodSchema)

module.exports=foodModel;