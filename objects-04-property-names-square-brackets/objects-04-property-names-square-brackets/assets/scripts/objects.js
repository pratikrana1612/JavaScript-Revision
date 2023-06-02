// "use strict";

const movieBtn = document.querySelector("#add-movie-btn");
const filterBtn = document.querySelector("#search-btn");

const newMoives = [];

const renderMovies = (movies = newMoives) => {
  const movieList = document.getElementById("movie-list");
  //   if (!movies) {
  //     movies = newMoives;
  //   }
  movieList.innerHTML = "";
  if (!movies) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
    movies.forEach((movie) => {
      const li = document.createElement("li");
      let { getFormattedTitle } = movie;
      //   getFormattedTitle=getFormattedTitle.bind(movie)
      const { info: movieType, ...otherPro } = movie;
      console.log(otherPro);
      let text = getFormattedTitle.call(movie) + " --> ";
      for (const key in movieType) {
        if (key !== "title") {
          text = text + `${key}:${movieType[key]}`;
        }
      }
      li.textContent = text;
      movieList.append(li);
    });
  }
};

const addMoiveHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.querySelector("#extra-name").value;
  const extraValue = document.querySelector("#extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }
  const newMovie = {
    info: {
      set title(value) {
        if (value.trim() === "") {
          this._title = "DEFAULT";
          return;
        }
        this._title = value;
      },
      get title() {
        return this._title.toUpperCase();
      },
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle: function() {
      console.log(this);
      return this.info.title.toUpperCase();
    },
  };
  newMovie.info._title = title;
  console.log(newMovie.info._title)
  newMoives.push(newMovie);
  console.log(newMoives);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterName = document.querySelector("#filter-title").value;
  let filteredMovies = newMoives.filter((movie) =>
    movie.info.title.includes(filterName)
  );
  console.log(filteredMovies);
  renderMovies(filteredMovies);
  console.log(this);
};
movieBtn.addEventListener("click", addMoiveHandler);
filterBtn.addEventListener("click", searchMovieHandler);
