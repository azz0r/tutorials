// your final challenge is to condense down this collection
var movies = [{
  title: 'Jaws',
  genre: 'Horror',
  entryPrice: 4
}, {
  title: 'The Heat',
  genre: 'Comedy',
  entryPrice: 4
}, {
  title: 'Twister',
  genre: 'Action',
  entryPrice: 6
}, {
  title: 'Die Hard',
  genre: 'Action',
  entryPrice: 4
}, {
  title: 'independence Day',
  genre: 'Action',
  entryPrice: 4
}, {
  title: 'Mars Attacks',
  genre: 'Action',
  entryPrice: 8
}];

// create a list of Action film titles where the price was over 5
// should be Mars Attacks, Twister
var list = movies
.filter((movie) => movie.genre === 'Action')
.filter((movie) => movie.entryPrice > 5);
var listTotal = movies.reduce((sum, movie) => {return sum + movie.entryPrice}, 0);
var movieTitles = list.map((movie) => movie.title);
console.log(movieTitles, listTotal);
// bonus point if you can then give me the total i spent watching those films
