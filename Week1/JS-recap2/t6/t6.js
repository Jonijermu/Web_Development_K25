'use strict';

function ratingMovie() {
  const movieArray = [];
  const movieAmount = parseFloat(prompt('How many movies do you rate: '));

  for (let i = 1; i <= movieAmount; i++) {
    const title = prompt('Whats the movie ' + i + ' title?: ');
    const rating = parseFloat(prompt('give rating to movie fro mscale 1-5: '));

    const movie = {
      title: title,
      rating: rating,
    };
    movieArray.push(movie);
  }
  movieArray.sort((a, b) => b.rating - a.rating);
  console.log(movieArray);
  return movieArray;
}

function htmlElements(movieArray) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  for (let i = 0; i < movieArray.length; i++) {
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    h1.textContent = movieArray[i].title;
    h2.textContent = 'Rating: ' + movieArray[i].rating;
    div.appendChild(h1);
    div.appendChild(h2);
  }
}

let movieArray = ratingMovie();
htmlElements(movieArray);
