import React, { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import Toggle from "../toggle/Toggle";
import "./navbar.css";
import galaxyIcon from "./galaxy-icon.png";
import MoviesPage from "../movies/MoviesPage"
import TvShows from "../tvshows/TvShows";
import Trends from "../trends/Trends";



function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-options">
          <img src={galaxyIcon} />
          <h1>MOVIES GALAXY</h1>
          <NavLink to="movie-galaxy-multi-pages/"><span>Movies</span></NavLink>
          <NavLink to="movie-galaxy-multi-pages/tvshows"><span>TV Shows</span></NavLink>
          <NavLink to="movie-galaxy-multi-pages/trends"><span>Trending</span></NavLink>
        
        </div>
        <div className="navbar-input-group">
           <div>
           <input type="text" placeholder="Search Movie" onChange={(e)=>{setInputValue(e.target.value)}}/>
          <HiSearch color="white" size={27} id="search" />
            </div> 
          <Toggle />
        </div>
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#ffff"
              size={27}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          ) : (
            <RiMenu3Line
              color="#ffff"
              size={27}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
          {toggleMenu && (
              <div className="navbar-options-menu">
                <NavLink to="movie-galaxy-multi-pages/"><span>Movies</span></NavLink>
                <NavLink to="movie-galaxy-multi-pages/tvshows"><span>TV Shows</span></NavLink>
                <NavLink to="movie-galaxy-multi-pages/trends"><span>Trending</span></NavLink>
              </div>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="movie-galaxy-multi-pages/" element={<MoviesPage inputValue={inputValue}/>}/>
        <Route path="movie-galaxy-multi-pages/tvshows" element={<TvShows inputValue={inputValue}/>}/>
        <Route path="movie-galaxy-multi-pages/trends" element={<Trends inputValue={inputValue}/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default Navbar;
