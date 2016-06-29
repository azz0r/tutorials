// truthy statements
// we want to check we have a browser Object
// and it has a window function
if (typeof browser !== "undefined" && browser.window) {
  return true;
} else {
  return false;
}

// what if we wanted to be more concise and put it to a variable
// do the above but console log the value and try
// to think how you can consolidate it to 1 line
return typeof browser !== "undefined" && browser.window;
// or if we wanted it to be a variable
var isVisible = typeof browser !== "undefined" && browser.window;
console.log(isVisible);
// Now we want a consice string to output a custom message, how?
var isVisible = typeof browser !== "undefined" && browser.window
  ? "Browser defined"
  : "Browser undefined";
