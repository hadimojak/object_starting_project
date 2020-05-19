const addMovieButton = document.getElementById("add-movie-btn"); //button
const searchMovieButton = document.getElementById("search-btn");
//  ---------------------------------------------
const movies = [];

const addMovieHandler = () => {
  const movieTitle = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;
  if (
    movieTitle.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    // console.log("bad input");
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
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
      return this.info.title.toUpperCase();
    },
  };
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

  filteredMovie.forEach((movie) => {
    const movieEl = document.createElement("li");
    // if ("info" in movie) {
    //   console.log("info is property on object movie");
    // }

    const { info, ...otherprops } = movie;
    // console.log(otherprops, "--------------");
    // const { title: movieTitle } = info;
    let { getFormatedTitle } = movie;
    // getFormatedTitle = getFormatedTitle.bind(movie);
    let text = getFormatedTitle.call(movie) + "_";
    for (const key in info) {
      if (key !== "title" && key !== '_title') {
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
};

addMovieButton.addEventListener("click", addMovieHandler);
searchMovieButton.addEventListener("click", searchMovieHandler);
