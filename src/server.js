'use strict'

const express = require('express');
const app = express();


const logger = require('./middleware/logger')
const foodRoutes = require('./routes/food')
const clothesRoutes = require('./routes/clothes')


const notFound = require('./error-handlers/404');
const errors = require('./error-handlers/500')

app.use(express.json())

app.use(logger)
app.use(foodRoutes)
app.use(clothesRoutes)


app.use('*', notFound)
app.use(errors);

module.exports ={
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server is up on http://localhost:${port}/`));
  }
}
