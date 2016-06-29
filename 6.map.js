/* map
* high order function
* transforms arrays
*/
var movies = [
  { title: 'Jaws', genre: 'Horror' },
  { title: 'The Heat', genre: 'Comedy' },
  { title: 'Twister', genre: 'Action' },
  { title: 'Die Hard', genre: 'Action' },
  { title: 'independence Day', genre: 'Action' },
  { title: 'Mars Attacks', genre: 'Comedy' }
];

console.log('es3');
var titles = [];
for (var i = 0; i < movies.length; i++) {
  titles.push(movies[i].title);
}
console.log(titles);

console.log('es5');
var titles = movies.map(function(movie) {
  //return the value you want to return in the sub set of results
  return movie.title;
  //return movie.title + ' is in the ' + movie.genre;
});
console.log(titles);

console.log('es6', titles);
var titles = movies.map((movie) => movie.title);
console.log(titles);
