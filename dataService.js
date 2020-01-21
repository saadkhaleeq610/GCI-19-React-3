var products = require('./src/data/products.json').products;
var categories = require('./src/data/categories.json').categories;

var combinedProductMap = new Map();
var productMap = new Map();
var categoryMap = new Map();


function getProducts(){
    products.forEach((product) => {
        productMap.set(product.id, product);
      });
} 

function getCategories(){
    categories.forEach((category) => {
        categoryMap.set(category.id, category.categoryName);
      });
} 

function combineProductsWithCategories(){
    getProducts();
    getCategories();
    console.log(productMap);
    productMap.forEach((value,key,map)=>{
        value.category = categoryMap.get(value.categoryId);
        combinedProductMap.set(key, value);
    });
}

module.exports = {
    getCombinedProductMap: function(){
    if(combinedProductMap.size === 0)
        combineProductsWithCategories();
    console.log(combinedProductMap);
    return combinedProductMap;
    },
};