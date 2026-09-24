// Demo simulim lokal: te dhenat e filmave jane te ngulitura ne faqe
// (API e jashtme TMDB nuk eshte e disponueshme), kerkimi filtron lokalisht.
const MOVIES = [
    {title:"Filmi Shembull 1", rating:8.5, overview:"Pershkrim shembull per demo."},
    {title:"Filmi Shembull 2", rating:7.9, overview:"Pershkrim shembull per demo."},
    {title:"Filmi Shembull 3", rating:9.1, overview:"Pershkrim shembull per demo."},
    {title:"Filmi Shembull 4", rating:7.2, overview:"Pershkrim shembull per demo."},
    {title:"Filmi Shembull 5", rating:8.8, overview:"Pershkrim shembull per demo."},
    {title:"Filmi Shembull 6", rating:8.1, overview:"Pershkrim shembull per demo."}
];
const POSTER = "john.jpg";

const searchBox = document.querySelector(".searchBox input");
const movieBox = document.querySelector(".movieCard");

const showMovies = (data) => {
    movieBox.innerHTML = "";
    data.forEach((item) => {
        const box = document.createElement("div");
        box.classList.add("card");
        box.innerHTML = `
        <img src="${POSTER}" alt="">
        <div class="details">
            <h1 class="movieName">${item.title}</h1>
            <span>${item.rating}</span>
            <h2>Overview</h2>
            <p>${item.overview}</p>
        </div>
        `;
        movieBox.appendChild(box);
    });
};

searchBox.addEventListener("keyup", () => {
    const q = searchBox.value.trim().toLowerCase();
    showMovies(q ? MOVIES.filter(m => m.title.toLowerCase().includes(q)) : MOVIES);
});

showMovies(MOVIES);
