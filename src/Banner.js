import React, {useEffect, useState} from 'react';
import axios from "./axios";
import request from "./request";
import "./style/Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original"


    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(request.fetchNetflixOriginals);
            setMovie(
                req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]
            );

            return req;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage:`url(${base_url}${movie?.backdrop_path}`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div>
                    <button className="banner__buttons">Reproduzir</button>
                    <button className="banner__buttons">Adicionar à lista</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className="banner--fadeBottom"/>

        </header>
    );
}

export default Banner;