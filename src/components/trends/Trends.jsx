import React from 'react'
import { useState, useEffect } from "react";
import MoviesContainer from '../movies/MoviesContainer'

function Trends(props) {
  const [movies, setMovies] = useState([]);
  const input = props.inputValue;
  const pageAPI = "https://api.themoviedb.org/3/trending/all/week?api_key=3d89869626b8b5a425dd887fe14ca987"
  console.log(pageAPI);
  const searchMulti = `https://api.themoviedb.org/3/search/multi?api_key=3d89869626b8b5a425dd887fe14ca987&query=${input}`
  const API_URL = input ? searchMulti: pageAPI;

  const searchMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    setMovies(data.results);
    console.log(data)
  };
  useEffect(() => {
    searchMovies();
  }, [input]);

  return (
    <MoviesContainer movies={movies}/>
  )
}

export default Trends