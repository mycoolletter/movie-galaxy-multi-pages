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
import Pricing from "../pricing/Pricing";



function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-options">
          <img src={galaxyIcon} />
          <h1>MOVIE GALAXY</h1>
          <NavLink to="/"><span>Movies</span></NavLink>
          <NavLink to="/tvshows"><span>TV Shows</span></NavLink>
          <NavLink to="/trends"><span>Trending</span></NavLink>
          <NavLink to="/pricing" ><span>Pricing</span></NavLink>
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
                  <span>Movies</span>
                  <span>TV Shows</span>
                  <span>Trending</span>
                  <span>Pricing</span>
              </div>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="" element={<MoviesPage inputValue={inputValue}/>}/>
        <Route path="tvshows" element={<TvShows inputValue={inputValue}/>}/>
        <Route path="trends" element={<Trends inputValue={inputValue}/>}/>
        <Route path="pricing" element={<Pricing/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default Navbar;
