import React, { useEffect, useState } from 'react'
import axios from '../axios';
import '../style/Row.css';


function Row({ title, fetchURL, isLargeRow }) {
    const base_url = "https://image.tmdb.org/t/p/original"

    const[movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);

            return request;
        }
        fetchData();
    }, [fetchURL]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className='row__posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row
