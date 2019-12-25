const express = require('express');
var _ = require("underscore");

const products = require('./src/data/products.json').products;
const categories = require('./src/data/categories.json').categories;

const app = express();
const PORT = 8080;



app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});