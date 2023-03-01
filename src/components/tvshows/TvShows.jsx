import React from 'react'
import MoviesContainer from '../movies/MoviesContainer' 
import { useState, useEffect } from "react";

const Api_Key = "3d89869626b8b5a425dd887fe14ca987";

function TvShows(props) {
  const [movies, setMovies] = useState([]);
  const input = props.inputValue;
  const pageAPI = props.pageAPI || "discover";
  console.log(pageAPI);
  const API_URL = `https://api.themoviedb.org/3/${
    input ? "search" : "discover"
  }/tv?api_key=${Api_Key}${input ? "&query=" + input : ""}`;

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

export default TvShows