/* filter
* functional programming
* high order function: what are they good for?
* allows us to compose a lot of smaller functions into bigger functions
* filter: basic and useful higher order component
* array function, that accepts another function as its argument,
* which it will use to return another version of the array
*/
var movies = [
  { title: 'Jaws', genre: 'Horror' },
  { title: 'The Heat', genre: 'Comedy' },
  { title: 'Twister', genre: 'Action' },
  { title: 'Die Hard', genre: 'Action' },
  { title: 'Indepence Day', genre: 'Action' },
  { title: 'Mars Attacks', genre: 'Comedy' }
];

console.log('es3');
var horrorMovies = [];
for (var i = 0; i < movies.length; i++) {
  if (movies[i].genre === 'Horror') {
    horrorMovies.push(movies[i]);
  }
}
console.log(horrorMovies);
// use smaller re-usable functions to create cleaner code

console.log('es3 part 2');
// showing functions passing into other functions
var isHorrorMovie = function(movie) {
  return movie.genre === 'Horror';
}
var horrorMovies = movies.filter(isHorrorMovie);
console.log('function into function', horrorMovies);

console.log('es5');
var horrorMovies = movies.filter(function(movie) {
  // expects a return true or false to add it to the newly filtered array
  return movie.genre === 'Horror';
});
console.log(horrorMovies);

console.log('es6');
var horrorMovies = movies.filter((movie) => movie.genre === 'Horror');
console.log(horrorMovies);
