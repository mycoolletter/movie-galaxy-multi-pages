import React, { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import TrailerMovies from "../trailers/TrailerMovies";
import "./movies.css";

import SingleMovie from "./SingleMovie";

function MoviesContainer(props) {
  const themeToggle = useContext(ThemeContext);
  const movies = props.movies;
  const [mediaType, setMediaType] = useState(props.mediaType);
  const [movieID, setMovieID] = useState("");
  const [displayTrailer, setDisplayTrailer] = useState(false);

  function onMovieClickHandler(id, media_type) {
    !mediaType && setMediaType(media_type);
    setMovieID(id);
    setDisplayTrailer(true);
    window.scrollTo(0, 0);
  }
  function handleDisplayTrailer(isTrue) {
    setDisplayTrailer(isTrue);
  }

  return (
    <React.Fragment>
      {movies?.length > 0 ? (
        <div
          className={
            themeToggle[0] ? "container dark-mode" : "container light-mode"
          }
        >
          {displayTrailer && (
            <TrailerMovies
              movieID={movieID}
              mediaType={mediaType}
              handleDisplayTrailer={handleDisplayTrailer}
            />
          )}
          <div className="movies-container">
            {movies.map((movie) => {
              return (
                <SingleMovie
                  movie={movie}
                  key={movie.id}
                  onMovieClickHandler={onMovieClickHandler}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </React.Fragment>
  );
}

export default MoviesContainer;
