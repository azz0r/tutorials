/* reduce
* high order function
* transforms lists
*/
var products = [
  { title: 'BT Broadband', price: 20 },
  { title: '20GB SIMO Contract', price: 16 },
  { title: 'Line Rental', price: 12 },
  { title: 'Net Protect', price: 10 }
];

console.log('es3');
var costMonthly = 0;
for (var i = 0; i < products.length; i++) {
  costMonthly += products[i].price;
}
console.log(costMonthly);

console.log('es5');
var costMonthly = 0;
var costMonthly = products.reduce(function(sum, product) {
  return sum + product.price;
}, 0);
console.log(costMonthly);

// what could we do to make this better and more re-usable?
var costMonthly = 0;
// create a totalCounter function to gets passed into reduce, perhaps we could use this elsewhere?
var totalCounter = function(sum, product) {
  return sum + product.price;
}
var costMonthly = products.reduce(totalCounter, 0);
console.log(costMonthly);

console.log('es6');
var costMonthly = products.reduce((sum, product) => sum + product.price, 0);
console.log(costMonthly);
