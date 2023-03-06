import React from "react";
import { useState, useEffect } from "react";
import MoviesContainer from "../movies/MoviesContainer";
import { searchMovies } from "../APIcall";

function Trends(props) {
  const input = props.inputValue;
  const [movies, setMovies] = useState([]);
  const mediaType = "multi";
  const linksArr = [
    `trending/all/week`,
    `search/${mediaType}`,
    input,
  ];

  useEffect(() => {
    searchMovies(linksArr).then(function(res) { setMovies(res.results) });
  }, [input]);
  return <MoviesContainer movies={movies} />;
}

export default Trends;
