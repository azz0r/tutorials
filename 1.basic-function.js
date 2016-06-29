var double = function(x) {
  return x * 2;
}

// I can assign that function, which is set to a variable,
// to another variable
var cheeseBurger = double;

// now i can set another variable by using that bound variable
var numberOfCheeseBurgers = cheeseBurger(2);

// what will this be? 4
console.log(numberOfCheeseBurgers);
