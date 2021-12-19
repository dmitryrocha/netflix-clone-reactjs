import React, { useEffect, useState } from 'react'
import axios from './axios';

function Row({ title }) {

    const[movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
        }
        fetchData();
    }, []);


    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row
