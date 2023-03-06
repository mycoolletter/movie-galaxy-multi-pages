import React from "react";
import MoviesContainer from "../movies/MoviesContainer";
import { useState, useEffect } from "react";
import { searchMovies } from "../APIcall";

function TvShows(props) {
  const [movies, setMovies] = useState([]);
  const mediaType = "tv";
  const input = props.inputValue;

  const linksArr = [
    `discover/${mediaType}`,
    `search/${mediaType}`,
    input,
    `&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York`,
  ];
  useEffect(() => {
    searchMovies(linksArr).then(function (res) {
      setMovies(res.results);
    });
  }, [input]);

  return <MoviesContainer movies={movies} mediaType={mediaType} />;
}

export default TvShows;
