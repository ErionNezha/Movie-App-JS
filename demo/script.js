const API = {
    url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=373a5b557b13f943de4b25f68ed22de7",
    search : "https://api.themoviedb.org/3/search/movie?api_key=373a5b557b13f943de4b25f68ed22de7&query=",
    img : "https://image.tmdb.org/t/p/w500"
}

const searchBox = document.querySelector(".searchBox input");
const movieBox = document.querySelector(".movieCard");
searchBox.addEventListener("keyup", () => {
        // console.log(searchBox.value);
        if(searchBox.value != ''){
            getMovies(API.search + searchBox.value);
        }else{
            getMovies(API.url);
        }
    });

// Fallback lokal: shfaqet nese API e TMDB deshton (p.sh. pa internet).
const FALLBACK = [
    {original_title:"Filmi Shembull 1", vote_average:8.5, overview:"Pershkrim shembull per demo.", poster_path:null},
    {original_title:"Filmi Shembull 2", vote_average:7.9, overview:"Pershkrim shembull per demo.", poster_path:null},
    {original_title:"Filmi Shembull 3", vote_average:9.1, overview:"Pershkrim shembull per demo.", poster_path:null},
    {original_title:"Filmi Shembull 4", vote_average:7.2, overview:"Pershkrim shembull per demo.", poster_path:null},
    {original_title:"Filmi Shembull 5", vote_average:8.8, overview:"Pershkrim shembull per demo.", poster_path:null},
    {original_title:"Filmi Shembull 6", vote_average:8.1, overview:"Pershkrim shembull per demo.", poster_path:null}
];
const getMovies = async(api) => {
    try {
        const response = await fetch(api);
        const data = await response.json();
        if (data && data.results && data.results.length) { showMovies(data.results); return; }
    } catch(e) { /* bie ne fallback */ }
    showMovies(FALLBACK);
}
const showMovies = (data) => {
    movieBox.innerHTML = "";
   data.forEach(
    (item) => {
        console.log(item);
        const box = document.createElement("div");
        box.classList.add("card");
        box.innerHTML = `
        <img src="${item.poster_path ? API.img + item.poster_path : "john.jpg"}" alt="">
        <div class="details">
            <h1 class="movieName">${item.original_title}</h1>
            <span>${item.vote_average}</span>
            <h2>Overview</h2>
            <p>${item.overview}</p>
        </div>
        `
        movieBox.appendChild(box)
    }
    )
}

getMovies(API.url);
