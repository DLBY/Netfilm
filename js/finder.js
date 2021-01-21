const URL = "http://www.omdbapi.com/?apikey=e5f20042&";
const selector = document.getElementById("movie");

const showFilmInfo = (poster, title, released, movieId) => {
  selector.innerHTML += `
  <div class="movies-items">
  <img src=${poster}>
  <div class="movieBottom">
      <h4>${title} (${released})</h4>
      <div class="readMore">
        <a href="#" class="button1" id="button1" onclick="fetchMovieMore('${movieId}')")>Read more</a>
      </div>
    </div>
  </div>
  `
}

const showMovieModal = (poster, title, released, plot) => {
  const showModal = document.getElementById("modal");
  const modal = document.getElementById("modal");
  showModal.innerHTML = ""
  modal.classList.remove("hidden");
  showModal.innerHTML += `
  <div class="modal-content">
  <span class="close">&times;</span>
    <img src=${poster}>
        <h2>${title}</h2>
        <p>${released} </p>
        <p>${plot} </p>
    </div>
`
  document.addEventListener("click", () => {
      modal.classList.add("hidden");
  })
}

const fetchMovies = (movie) => {
  
  let movieNameCleaned = movie.replace(/\s/g, "+");
  fetch(URL + "s=" + movieNameCleaned)
    .then((response) => response.json())
    .then((response) => {
      let movies = response.Search
      selector.innerHTML = "";
      console.log(response);
      movies.forEach(movie => {
        const poster = movie.Poster;
        const title = movie.Title;
        const released = movie.Year;
        const movieId = movie.imdbID
        showFilmInfo(poster, title, released, movieId)
    });
  })
    .catch(error => {
      console.log(error);
    })
};

const fetchMovieMore = (movieId) => {
  fetch(URL + "i=" + movieId.toString())
  .then(response => response.json())
  .then(movie => {

      const poster = movie.Poster;
      const title = movie.Title;
      const released = movie.Released;
      const plot = movie.Plot;
      showMovieModal(poster, title, released, plot)
  })
  .catch(error => {
      console.log(error);
  })
}