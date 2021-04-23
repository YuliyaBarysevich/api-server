'use strict';

const express = require('express');

const Clothes = require('../models/clothes');
const GenericCollection = require('../models/data-collection-class');
const clothes = new GenericCollection(Clothes)


const router = express.Router();


router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneItem);
router.post('/clothes', createItem);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

async function getClothes(req, res) {
  let getAllClothes = await clothes.read();
  res.status(200).json(getAllClothes);
}

async function getOneItem(req, res){
  const id = parseInt(req.params.id);
  let getOneThing = await clothes.read(id);
  res.status(200).json(getOneThing);
}

async function createItem(req, res){
  let clothesInfo = req.body;
  let createdItem = await clothes.create(clothesInfo);
  res.status(201).json(createdItem);
}

async function updateClothes(req, res){
  const id = parseInt(req.params.id);
  let clothesInfo = req.body;
  let newItem = await clothes.update(id, clothesInfo);
  res.status(200).json(newItem);
}

async function deleteClothes (req, res){
  const id = parseInt(req.params.id);
  await clothes.delete(id);
  res.status(200).json(null);

}

module.exports = router;