
import React from "react";
import { FaImdb } from "react-icons/fa";
import TrailerMovies from "../trailers/TrailerMovies";

const Image_Base_URL = "https://image.tmdb.org/t/p/w500/";

function SingleMovie(props) {
  const movie = props.movie;
  const poster =
    movie.poster_path
      ? Image_Base_URL + movie.poster_path
      : "https://via.placeholder.com/400";

  const title = movie.title || movie.name;
  const released = movie.release_date || movie.first_air_date;
  const onMovieClickHandler = props.onMovieClickHandler;
    let vote = 0;
  
  try {vote = movie.vote_average.toFixed(1);}catch(e){

  }


  return (
    <div className="movie"  onClick={()=>{onMovieClickHandler(movie.id, movie.media_type)}}>
      <p className="discription">{movie.overview}</p>
      <div>
        <img src={poster} alt={title} />
      </div>

      <div>
        <p>{`Released: ${released}`}</p>
        <h3>{title}</h3>
        <div>
          <FaImdb size={30} color="white" />
          <span>{vote}</span>
        </div>
      </div>
    </div>
    
  );
}

export default SingleMovie;
