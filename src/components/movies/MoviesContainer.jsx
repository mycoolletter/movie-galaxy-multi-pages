import React from "react";
import "./movies.css";

// import { FaImdb } from "react-icons/fa";
import SingleMovie from "./SingleMovie";




// function SingleMovie(props) {
//   const movie = props.movie;
//   const poster = movie.poster_path!== null
//   ? Image_Base_URL + movie.poster_path
//   : "https://via.placeholder.com/400"

//   return (
//     <div className="movie">
//       <p className="discription">{movie.overview}</p>
//       <div>
//         <img
//           src={poster}
//           alt={movie.title}
//         />
//       </div>
      
//       <div>
//         <p>{`Released: ${movie.release_date}`}</p>
//         <h3>{movie.title}</h3>
//         <div>
//           <FaImdb size={30} color="white" />
//           <span>{movie.vote_average}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

function MoviesContainer(props) {
  const movies = props.movies;
  // const pageAPI = props.pageAPI;
//   const input = props.inputValue;
//   const pageAPI = props.pageAPI || "discover";
//   console.log(pageAPI);
//   const API_URL = `https://api.themoviedb.org/3/${
//     input ? "search" : pageAPI
//   }/movie?api_key=${Api_Key}${input ? "&query=" + input : ""}`;

  // const searchMovies = async () => {
  //   const response = await fetch(pageAPI);
  //   const data = await response.json();

  //   setMovies(data.results);
  //   console.log(data)
  // };
  // useEffect(() => {
  //   searchMovies();
  // }, []);

  return (
    <React.Fragment>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <SingleMovie movie={movie} key={movie.id}/>;
          })}
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
