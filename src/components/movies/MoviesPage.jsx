import React from 'react';
import { useState, useEffect } from "react";
import MoviesContainer from './MoviesContainer';
import { searchMovies } from "../APIcall";

function MoviesPage(props) {
    const [movies, setMovies] = useState([]);
    const mediaType = "movie";
    const input = props.inputValue;

    const linksArr = [
        `discover/${mediaType}`,
        `search/${mediaType}`,
        input,
        `&language=en-US&sort_by=popularity.desc`,
      ];
    useEffect(() => {
        searchMovies(linksArr).then(function (res) {
          setMovies(res.results);
        });
      }, [input]);

  return (
   <MoviesContainer movies={movies} mediaType ={mediaType}/>
  )
}

export default MoviesPage