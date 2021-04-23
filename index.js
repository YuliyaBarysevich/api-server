'use strict'

const server = require('./src/server')
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose')
const MONGDB_URI = 'mongodb://localhost:27017/food'
const options = { useNewUrlParser: true, useUnifiedTopology: true };


dotenv.config();

server.start(PORT)

// const databaseInteractions = async () => {

//   let pizza = {
//     product: 'pizza',
//     calories: 1200,
//     price: 12
//   }

//   let apple = {
//     product: 'apple',
//     calories: 30,
//     price: 5
//   }

//   let newFood = await food.create(pizza);
//   let moreFood = await food.create(apple);

//   console.log('create:', newFood);

//   let oneFood = await food.read(newFood._id);
//   console.log('get one food item', oneFood);

//   let allFoods = await food.read();
//   console.log(allFoods);
// }

// databaseInteractions();