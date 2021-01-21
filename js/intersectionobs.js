const formSearch = document.querySelector("form");


formSearch.addEventListener("submit", (e) => {
    const movieSearch = document.getElementById("searchbar").value;
    e.preventDefault();
    fetchMovies(movieSearch)

    let observer = new IntersectionObserver(entries => {
        console.log(entries);
    }, {

    })



    items.forEach(item => {
        console.log("item =>", item);
        observer.observe(item)
    })

})