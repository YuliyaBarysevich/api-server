'use strict';

const express = require('express');

const Food = require('../models/food');
const GenericCollection = require('../models/data-collection-class');
const food = new GenericCollection(Food)


const router = express.Router();


router.get('/food', getFood);
router.get('/food/:id', getOneProduct);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

async function getFood(req, res) {
  let getAllFood = await food.read();
  res.status(200).json(getAllFood);
}

async function getOneProduct(req, res){
  const id = req.params.id;
  let getOneProduct = await food.read(id);
  res.status(200).json(getOneProduct);
}

async function createFood(req, res){
  let foodContent = req.body;
  let createdProduct = await food.create(foodContent);
  res.status(201).json(createdProduct);
}

async function updateFood(req, res){
  const id = req.params.id;
  let foodContent = req.body;
  let newFood = await food.update(id, foodContent);
  res.status(200).json(newFood);
}

async function deleteFood(req, res){
  const id = req.params.id;
  await food.delete(id);
  res.status(200).json(null);

}

module.exports = router;
