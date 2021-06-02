'use strict';

const express = require('express');

const ToDo = require('../models/todo');
const GenericCollection = require('../models/data-collection-class');
const todo = new GenericCollection(ToDo)


const router = express.Router();


router.get('/todo', getItems);
router.get('/todo/:id', getOneItem);
router.post('/todo', createItem);
router.put('/todo/:id', updateItem);
router.delete('/todo/:id', deleteItem);

async function getItems(req, res) {
  let getAllItems = await todo.read();
  res.status(200).json(getAllItems);
}

async function getOneItem(req, res){
  const id = req.params.id;
  let getOneItem = await todo.read(id);
  res.status(200).json(getOneItem);
}

async function createItem(req, res){
  let todoContent = req.body;
  let createdItem = await todo.create(todoContent);
  res.status(201).json(createdItem);
}

async function updateItem(req, res){
  const id = req.params.id;
  let todoContent = req.body;
  let newItem = await todo.update(id, todoContent);
  res.status(200).json(newItem);
}

async function deleteItem(req, res){
  const id = req.params.id;
  await todo.delete(id);
  res.status(200).json(response)

}

module.exports = router;