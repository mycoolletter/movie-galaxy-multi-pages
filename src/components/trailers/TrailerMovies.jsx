import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { RiCloseLine } from "react-icons/ri";
import "./trailerMovies.css";
import { Api_Key, linkBeginning} from "../APIcall";

function TrailerMovies({ movieID, handleDisplayTrailer, mediaType }) {
  const [videoURL, setVideoURL] = useState("");
  const [isTrailerFound, setIsTrailerFound] = useState(false);

  async function handleSearch() {
    const response = await fetch(
      `${linkBeginning}${mediaType}/${movieID}/videos?api_key=${Api_Key}&language=en-US`
    );
    const responseJSON = await response.json();
    let officialTrailer;
 
    const responseArray = responseJSON.results;
    if (responseArray.length > 0) {
      officialTrailer = responseArray.find((obj) => {
        return obj.name == "Official Trailer";
      });
      
      if(!officialTrailer){
      officialTrailer = responseArray[responseArray.length - 1];
      }
      setIsTrailerFound(true);
    } else {
      setIsTrailerFound(false);
    }

    try{
        const URL = "https://www.youtube.com/watch?v=" + officialTrailer.key;
        setVideoURL(URL);
    } catch(e){

    } 
    
  };
  useEffect(() => {
    handleSearch();
  }, [movieID]);

  return (
    <Fragment>
      <div className="player-container">
        <RiCloseLine
          color="#ffff"
          size={45}
          onClick={() => {
            handleDisplayTrailer(false);
          }}
        />
        <div className="player">
          {isTrailerFound ? (
            <ReactPlayer url={videoURL} controls={true} />
          ) : (
            <h1>Trailer is not found</h1>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default TrailerMovies;
