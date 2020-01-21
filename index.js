var express = require('express');
var _ = require("underscore");
var dataService = require('./dataService.js');

var app = express();
var PORT = 8080;

// Routes 
app.get('/products/all', (req, res) => {
  res.send(Array.from(dataService.getCombinedProductMap()));
});

app.get('/products/:productId', (req, res) => {
  let data = dataService.getCombinedProductMap();
  res.send(data.get(req.params.productId));
});


app.get('/category/:ctyId', (req, res) => {
  let data = dataService.getCombinedProductMap();
  var filteredProducts = []
  for (product of data) {
    if (product[1].categoryId === req.params.ctyId) {
        filteredProducts.push(product[1]);
    }
  }
  res.send(filteredProducts);
});


app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});