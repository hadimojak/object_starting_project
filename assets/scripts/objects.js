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
    console.log("bad input");
    return;
  }

  const newMovie = {
    info: {
      title: movieTitle, //if movieTitle name is title we can use title keyname and value name are the same
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
  console.log(movies);
  console.log("here");
  // renderMovie(newMovie.info.title, extraValue, extraName, newMovie.id); //render movie with LIST ITEMS
  renderMovie();
};

// const renderMovie = (title,extraName,extraValue,id) => { // this is with list items
//   const movieList = document.getElementById("movie-list"); //unordered list
//   const li = document.createElement("li");
//   li.innerHTML=`<div> <pre>${title}   ${extraName}  ${extraValue}    with  id : ${id}</pre></div>`
//   movieList.append(li);
//   movieList.classList.add("visible");
// };
const renderMovie = () => {
  const movieList = document.getElementById("movie-list"); //unordered list
  if (movies.length !== 0) {
    movieList.classList.add("visible");
  } else {
    movieList.classList.remove("visible");
    return;
  }
  movieList.innerHTML = "";
  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    movieEl.textContent = movie.info.title;
    movieList.append(movieEl);
  });
};

addMovieButton.addEventListener("click", addMovieHandler);
