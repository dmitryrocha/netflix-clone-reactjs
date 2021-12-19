import axios from "axios";

// URL base para request de filmes no TMDB
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;