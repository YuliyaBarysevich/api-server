'use strict'

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

require('@code-fellows/supergoose');

const GenericCollection = require('../src/models/data-collection-class')
const Foods = require('../src/models/food')
const Clothes = require('../src/models/clothes')
const food = new GenericCollection(Foods)
const clothes = new GenericCollection(Clothes)

// =================================BAD ROUTE / BAD METHOD=================================
describe('API SERVER:', () => {

 it ('should respond with a 404 on not found', async() => {
   return mockRequest.get('/no-thing').then(data => {
     expect(data.status).toBe(404)
   })
 })

 it ('should respond with 404 on BAD REQUEST', async() => {
   const response = await mockRequest.delete('/recipes');
   expect(response.status).toBe(404)
 })
})
// ===========================================================================================



describe ('Food Actions', () => {
  it('can create() a new food item', () => {
    let obj = { product: 'test food', calories: 300, price: 25 };
    let expected = { product: 'test food', calories: 300, price: 25 };

    return food.create(obj)
      .then(record => {
        Object.keys(obj).forEach(item => {
          expect(record[item]).toEqual(expected[item])
        })
      })
  })

  it('can update() a food item', () => {
    let obj = { }
  })

  it('can read() a single food item', () => {
    let obj = { product: 'test food', calories: 300, price: 25 };

    return food.create(obj)
      .then(record => {
        return clothes.read(record._id)
          .then(item => {
            console.log('this should be test clothes 1', item)
          })
      })
  })

  it('can read() all food items from DB', () => {
    let obj = { product: 'test food', calories: 300, price: 25 };

    return food.create(obj)
      .then(record => {
        return clothes.read(record)
          .then(item => {
            console.log('this should be test clothes 1', item)
          })
      })
  })

  it('can delete() a single clothes item', () => {
    let obj = { product: 'test food', calories: 300, price: 25 };

    return food.create(obj)
      .then(record => {
        return clothes.delete(record._id)
          .then(item => {
            expect(record[item]).toBeFalsy()
          })
      })
  })

})


// Clothes Route tests

describe ('Clothes Actions ', () => {
  it('can create() a new clothes item', () => {
    let obj = { type: 'test clothes', color: 'blue', gender: 'female'}
    let expected = { type: 'test clothes', color: 'blue', gender: 'female'}

    return clothes.create(obj)
      .then(record => {
        Object.keys(obj).forEach(item => {
          expect(record[item]).toEqual(expected[item])
        })
      })
  })

  it('can read() a single clothes item', () => {
    let obj = { type: 'test clothes', color: 'blue', gender: 'female'}

    return clothes.create(obj)
      .then(record => {
        return clothes.read(record._id)
          .then(item => {
            console.log('this should be test clothes 1', item)
          })
      })
  })

  it('can read() all clothes items from DB', () => {
    let obj = { type: 'test clothes', color: 'blue', gender: 'female'}

    return clothes.create(obj)
      .then(record => {
        return clothes.read(record)
          .then(item => {
            console.log('this should be test clothes 1', item)
          })
      })
  })

  it('can delete() a single clothes item from DB', () => {
    let obj = { type: 'test clothes', color: 'blue', gender: 'female'}
    // let expected = { type: 'test clothes', color: 'blue', gender: 'female'}

    return clothes.create(obj)
      .then(record => {
        return clothes.delete(record._id)
          .then(item => {
            expect(record[item]).toBeFalsy()
          })
      })
  })

})


