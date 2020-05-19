'use strict';
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const { title: movieTitle } = info;
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.apply(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
<<<<<<< HEAD
        if (val.trim() == "") {
          this._title = "defult";
          return;
        } else this._title = val;
      },
      get title() {
        return this._title;
      }, //if movieTitle name is title we can use title keyname and value name are the same
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormatedTitle() {
      console.log(this, "---------------");
=======
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      console.log(this);
>>>>>>> 4cbef6b36a0bf6d031d6105d7f15146bfb8550bb
      return this.info.title.toUpperCase();
    }
  };
<<<<<<< HEAD
  movies.push(newMovie);
  // console.log(movies);
  // console.log("here");
  // renderMovie(newMovie.info.title, extraValue, extraName, newMovie.id); //render movie with LIST ITEMS
  renderMovie();
};

newMovie.info.title = title;
console.log(newMovie.info.title);

// const renderMovie = (title, extraName, extraValue, id) => {
//   // this is with list items
//   const movieList = document.getElementById("movie-list"); //unordered list
//   const li = document.createElement("li");
//   li.innerHTML = `<div> <pre>${title}   ${extraValue}  ${extraName}    with  id : ${id}</pre></div>`;
//   movieList.append(li);
//   movieList.classList.add("visible");
// };
const renderMovie = (filter = "") => {
  const movieList = document.getElementById("movie-list"); //unordered list
  if (movies.length !== 0) {
    movieList.classList.add("visible");
  } else {
    movieList.classList.remove("visible");
    return;
  }
  movieList.innerHTML = "";

  const filteredMovie = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter)); //search process
=======
>>>>>>> 4cbef6b36a0bf6d031d6105d7f15146bfb8550bb

  newMovie.info.title = title;
  console.log(newMovie.info.title);

<<<<<<< HEAD
    const { info, ...otherprops } = movie;
    // console.log(otherprops, "--------------");
    // const { title: movieTitle } = info;
    let { getFormatedTitle } = movie;
    // getFormatedTitle = getFormatedTitle.bind(movie);
    let text = getFormatedTitle.call(movie) + "_";
    for (const key in info) {
      if (key !== "title" && key !== "_title") {
        text = text + `${key}:${info[key]} `;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const searchMovieHandler = () => {
  // const searchMovieHandler = function () {
  // console.log(this);
  const filterTitle = document.getElementById("filter-title").value;
  renderMovie(filterTitle);
=======
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  console.log(this);
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
>>>>>>> 4cbef6b36a0bf6d031d6105d7f15146bfb8550bb
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
