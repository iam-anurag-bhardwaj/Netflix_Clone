const API_KEY = "ae9a59785e3e25ff016d76274ec670e0";

const api = {
   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
   // fetchNetflixOriginals: `/dicover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`
};


export default api;
