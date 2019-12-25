// Helper Functions
function productsWithCategories() {
  var response = [];
  products.forEach((product) => {
    product["category"] = categories.find(category => category.id === product.categoryId);
     response.push(product);
  });
  return response;
}

function productById(productId) {
  var filteredProduct = _.find(products, { id: productId });
  filteredProduct.category = _.find(categories, { id: filteredProduct.categoryId });
  return filteredProduct;
}

function productsByCategoryId(ctyId) {
  var productsData = products;
  productsData
  .forEach((product) => product.category = categories
  .filter(category => category.id === product.categoryId)[0]);
  
  return _.where(productsData, { categoryId: ctyId });
}


// Routes 
app.get('/products/all', (req, res) => {
  res.json(productsWithCategories());
});

app.get('/products/:productId', (req, res) => {
  console.log(req.params.productId);
  res.send(productById(req.params.productId));
});


app.get('/category/:ctyId', (req, res) => {
  res.send(productsByCategoryId(req.params.ctyId));
});