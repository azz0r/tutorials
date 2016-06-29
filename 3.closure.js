// functions are also closures
// they have access to variables outside the function
var product = 'BT Broadband';
function buyProduct() {
  console.log('Bought ' + product);
}
//buyProduct();
/*
Bought Broadband
no argument passed but prodct var is set in the outside the function scope
they are closures, without it we'd have to pass the product into the function
paramaters.
*/

product = 'Virgin Broadband';
buyProduct();

/*
Nothing is copied, it is read from the outer scope
heres a valid use case - can you think of where that might be useful?
PRACTICAL:
Write a function called createProduct that returns
an object with an end date set outsite the function
AND a string field called title;
*/
function createProduct(title) {
  return {
    title: title,
    saleEnds: endDate
  };
}
// but we want to set the date outside the object so we can change it easily
// as the page changes alot and so do start and end dates of sales
var endDate = '12/12/2016';
console.log(
  createProduct('Broadband'),
  createProduct('Mobile'),
  createProduct('Sport'));

// and now if i want to change it?
endDate = '24/01/2017';
console.log(
  createProduct('Broadband'),
  createProduct('Mobile'),
  createProduct('Sport'));
