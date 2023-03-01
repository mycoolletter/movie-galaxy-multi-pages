import React from 'react';
import { useState, useEffect } from "react";
import MoviesContainer from './MoviesContainer';
const Api_Key = "3d89869626b8b5a425dd887fe14ca987";

function MoviesPage(props) {
    const [movies, setMovies] = useState([]);
    const mediaType = "movie";
    const input = props.inputValue;
    const pageAPI = props.pageAPI || "discover";
    const API_URL = `https://api.themoviedb.org/3/${
      input ? "search" : pageAPI
    }/${mediaType}?api_key=${Api_Key}${input ? "&query=" + input : ""}`;  


    const searchMovies = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();  
        setMovies(data.results);
      };
      useEffect(() => {
        searchMovies();
      }, [input]);
      

  return (
   <MoviesContainer movies={movies} mediaType ={mediaType}/>
  )
}

export default MoviesPage