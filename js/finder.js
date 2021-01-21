const URL = `http://www.omdbapi.com/?apikey=c6c49b9f&t=`;
const searchURL = `http://www.omdbapi.com/?apikey=c6c49b9f&s=`;
const selector = document.getElementById("movie");

const form = document.querySelector("form");

const readMore = () => {
  let modal = document.getElementById("myModal");
  let button1= document.getElementById("button1")
  button1.addEventListener("click" , () => {
  modal.style.display = "block";})
  let span = document.getElementsByClassName("close")[0];
  span.addEventListener("click", () => {
    modal.style.display = "none";
    window.addEventListener("click", () => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
  });
});
}

const showMovieModal = (selector, poster, title, released, plot) => {
  
  modal.style.display = "block";
  selector.innerHTML += `
  <div class="modal-content">
  <span class="close">&times;</span>
    <img src=${poster}>
        <h2>${title}</h2>
        <p>${released} </p>
        <p>${plot} </p>
    </div>
`
}

const fetchMovieMore = (movie) => {
  
  let movieNameCleaned = movie.replace(/\s/g, "+");
  fetch(URL + movieNameCleaned)
    .then((response) => response.json())
    .then((response) => {
      selector.innerHTML = "";
      console.log(response);
      showFilmInfo(selector, response.Poster, response.Title, response.Released, response.Plot);
    })
    .catch(error => {
      console.log(error);
    })
};

const searchMovie = (movie) => {
  
  let movieNameCleaned = movie.replace(/\s/g, "+");
  fetch(searchURL + movieNameCleaned)
    .then((response) => response.json())
    .then((response) => {
      selector.innerHTML = "";
      let movies = response.Search
      movies.forEach(movie => {
      console.log(response);
      showFilmInfo(selector, movie.Poster, movie.Title, movie.Year, movie.Plot);
    });
  })
  
    .catch(error => {
      console.log(error);
    })
}

form.addEventListener("submit", (e) => {
  const submitResearch = document.getElementById("searchbar").value;
  e.preventDefault();
  searchMovie(submitResearch);
});


const showFilmInfo = (selector, poster, title, released) => {
  selector.innerHTML += `
  <div class="movies-items">
  <img src=${poster}>
  <div class="movieBottom">
      <h4>${title} (${released})</h4>
    
      <div class="readMore">
        <a href="#" class="button1" id="button1">Read more</a>
      </div>
    </div>
  </div>

  `
}
