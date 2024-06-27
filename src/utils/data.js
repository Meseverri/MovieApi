const classicMovies = [
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    img: "./movieAssets/godfather.jpg",
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    img: "./movieAssets/pulpfiction.jpg",
    genre: "Crime",
  },
  {
    title: "Schindler's List",
    director: "Steven Spielberg",
    year: 1993,
    img: "./movieAssets/schindlerslist.jpg",
    genre: "Biography",
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    img: "./movieAssets/shawshank.jpg",
    genre: "Drama",
  },
  {
    title: "Casablanca",
    director: "Michael Curtiz",
    year: 1942,
    img: "./movieAssets/casablanca.jpg",
    genre: "Romance",
  },
  {
    title: "Citizen Kane",
    director: "Orson Welles",
    year: 1941,
    img: "./movieAssets/citizenkane.jpg",
    genre: "Drama",
  },
  {
    title: "Gone with the Wind",
    director: "Victor Fleming",
    year: 1939,
    img: "./movieAssets/gonewiththewind.jpg",
    genre: "Romance",
  },
  {
    title: "The Wizard of Oz",
    director: "Victor Fleming",
    year: 1939,
    img: "./movieAssets/wizardofoz.jpg",
    genre: "Fantasy",
  },
  {
    title: "Psycho",
    director: "Alfred Hitchcock",
    year: 1960,
    img: "./movieAssets/psycho.jpg",
    genre: "Horror",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    director: "George Lucas",
    year: 1977,
    img: "./movieAssets/starwarsIV.jpg",
    genre: "Sci-Fi",
  },
];
const plataformas = [
  {
    plaraformName: "Disney Plus",
    movieList: [], // Aquí puedes agregar los ObjectId de las películas
    url: "https://www.disneyplus.com",
    logo: "logo_disney_plus",
  },
  {
    plaraformName: "Netflix",
    movieList: [], // Aquí puedes agregar los ObjectId de las películas
    url: "https://www.netflix.com",
    logo: "logo_netflix",
  },
  {
    plaraformName: "HBO Max",
    movieList: [], // Aquí puedes agregar los ObjectId de las películas
    url: "https://www.hbomax.com",
    logo: "logo_hbo_max",
  },
  {
    plaraformName: "Amazon Prime Video",
    movieList: [], // Aquí puedes agregar los ObjectId de las películas
    url: "https://www.primevideo.com",
    logo: "logo_amazon_prime",
  },
];

module.exports = { classicMovies, plataformas };
