const URL = "https://www.omdbapi.com/?apikey=e5f20042&";
const selector = document.getElementById("movie");

const firstMovies = (movie) => {
  
  let movieNameCleaned = movie.replace(/\s/g, "+");
  fetch(URL + "t=" + movieNameCleaned)
    .then((response) => response.json())
    .then(movie => {

      const poster = movie.Poster;
      const title = movie.Title;
      const released = movie.Released;
      const plot = movie.Plot;
      showFilmInfo(poster, title, released, plot)
  })
    .catch(error => {
      console.log(error);
    })
};

const showFilmInfo = (poster, title, released, movieId) => {
  selector.innerHTML += `
  <div class="movies-items not-visible" data-aos="fade-up">
  <img class="movie_poster"src=${poster} onclick="fetchMovieMore('${movieId}')")>
  <div class="movieBottom">
      <h4>${title} <br>(${released})</h4>
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
  .then(() => {
    let observer = new IntersectionObserver(observables => {
        observables.forEach(observable => {
            if (observable.intersectionRatio > 0.5) {
                observable.target.classList.remove("not-visible")
                observer.unobserve(observable.target);
            }
        })
    }, {
        threshold: [0.5]
    })

    let items = document.querySelectorAll(".movies-items")
    items.forEach(item => {
        observer.observe(item)
    })
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

firstMovies("Harry potter and the sorcerer's stone");
firstMovies("Jurassic Park");
firstMovies("Lord of the rings");
firstMovies("Shutter Island");
firstMovies("Batman");
firstMovies("Forrest Gump");
firstMovies("Parasite");
firstMovies("Mulan");

firstMovies("Soul");
firstMovies("Toy Story");
firstMovies("Avengers");
firstMovies("Get Out");
