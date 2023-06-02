const addMovieModal = document.querySelector("#add-modal");
const backdrop = document.querySelector("#backdrop");
const StartaddMovie = document.querySelector("header button");
const cancelBtn = addMovieModal.querySelector(".btn--passive");
const conformBtn = cancelBtn.nextElementSibling;
const inputs = addMovieModal.querySelectorAll("input");
const entryText = document.querySelector("#entry-text");
const confirmDialog = document.getElementById("delete-modal");
const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const clearInput = () => {
  for (const i of inputs) {
    i.value = "";
  }
};

const deleteMovie = (movieId) => {
  index = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    index++;
  }
  movies.splice(index, 1);
  const ul = document.getElementById("movie-list");
  ul.children[index].remove();
  updateUI()
};

const removeConformModal = () => {
  confirmDialog.classList.remove("visible");
  toggleBackdrop();
};

const deleteMovieHandler = (movieId) => {
  confirmDialog.classList.add("visible");
  toggleBackdrop();
  const no = confirmDialog.querySelector(".btn--passive");
  let yes = confirmDialog.querySelector(".btn--danger");

  yes.replaceWith(yes.cloneNode(true));
  yes = confirmDialog.querySelector(".btn--danger");
  no.removeEventListener("click", removeConformModal);
  yes.addEventListener("click", () => {
    deleteMovie(movieId);
    removeConformModal();
  });
  no.addEventListener("click", removeConformModal);
  // deleteMovie()
};

const renderMovieElment = (id, title, imageUrl, rating) => {
  const li = document.createElement("li");
  li.className = "movie-element";
  li.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;
  li.addEventListener("click", deleteMovieHandler.bind(null, id));
  const ul = document.getElementById("movie-list");
  ul.append(li);
};

const updateUI = () => {
  if (movies.length === 0) {
      entryText.style.display = "block";
  } else {
    entryText.style.display = "none";
  }
};

const removeMoiveModalHandler = () => {
  addMovieModal.classList.remove("visible");
};

const addMovieModalHandler = function () {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const addMovieHandler = () => {
  const titleValue = inputs[0].value;
  const imageValue = inputs[1].value;
  const rating = inputs[2].value;
  if (
    titleValue.trim() === "" ||
    imageValue.trim() === "" ||
    rating.trim() === "" ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert("Please enter valid value");
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageValue,
    rating: rating,
  };
  movies.push(newMovie);
  console.log(movies);
  renderMovieElment(newMovie.id, titleValue, imageValue, rating);
  backdropClickHandler();
  clearInput();
  updateUI();
};

const backdropClickHandler = () => {
  removeMoiveModalHandler();
  toggleBackdrop();
  clearInput();
};

const cancelMovieHandler = () => {
  removeMoiveModalHandler();
  toggleBackdrop();
  clearInput();
};

StartaddMovie.addEventListener("click", addMovieModalHandler);
backdrop.addEventListener("click", backdropClickHandler);
cancelBtn.addEventListener("click", cancelMovieHandler);
conformBtn.addEventListener("click", addMovieHandler);
