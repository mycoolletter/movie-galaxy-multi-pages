import React from 'react';
import { FaImdb } from "react-icons/fa";

const Image_Base_URL = "https://image.tmdb.org/t/p/w500/";

function SingleMovie(props) {
    const movie = props.movie;
    const poster = movie.poster_path!== null
    ? Image_Base_URL + movie.poster_path
    : "https://via.placeholder.com/400";

    const title = movie.title || movie.name;
    const released = movie.release_date || movie.first_air_date
  
    return (
      <div className="movie">
        <p className="discription">{movie.overview}</p>
        <div>
          <img
            src={poster}
            alt={title}
          />
        </div>
        
        <div>
          <p>{`Released: ${released}`}</p>
          <h3>{title}</h3>
          <div>
            <FaImdb size={30} color="white" />
            <span>{movie.vote_average}</span>
          </div>
        </div>
      </div>
    );
}

export default SingleMovie