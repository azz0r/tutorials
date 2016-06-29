//http://www.w3schools.com/js/js_functions.asp
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

var conversion = toCelsius(77);
console.log(conversion);

// PRACTICAL
// how might you use that to output a string that
// says the temperature is look for function being used in the string
// also set celsius as a variable so its quick to edit
var celcius = 77;
var text = "The temperature is " + toCelsius(celcius) + " Celsius";
console.log(text);
// so now we see how functions work together with strings and numbers to
// output what we want
