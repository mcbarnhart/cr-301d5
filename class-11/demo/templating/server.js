'use strict';

require('dotenv').config();

const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('./public'))

// Routes
app.get('/', (request, response) =>{
  response.render('index');
})

app.get('/list', (request, response) => {
  // TODO: go to DB
  const list = ['apples','bacon','bacon','chocolate'];

  const viewModel = {
    groceryList: list,
    user: {
      name: 'Keith',
      username: 'dahlbyk'
    }
  };
  response.render('list', viewModel)
})

app.get('/cart', (request, response) => {
  // TODO: go to DB
  const cart = [
    { product: 'apples', quantity: 5, price: 25.43 },
    { product: 'bacon', quantity: 3, unit: 'lbs', price: 2.00 },
    { product: 'chocolate', quantity: 20, price: 0.25 },
  ];

  const viewModel = {
    cart,
    user: {
      name: 'Keith',
      username: 'dahlbyk'
    }
  };
  response.render('cart', viewModel)
})

const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 
