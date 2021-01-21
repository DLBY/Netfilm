const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const submitResearch = document.getElementById("searchbar").value;
  e.preventDefault();
  fetchMovies(submitResearch);
});