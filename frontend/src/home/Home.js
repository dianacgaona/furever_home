import React, { Component } from "react";
import "../css/home.css";
import Wallpaper from "./Wallpaper";
import SearchBar from "./SearchBar";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <p className="greeting">WHERE PETS FIND THEIR PEOPLE</p>
        <SearchBar />
        <div className="wallpaper">
          <Wallpaper />
        </div>
      </div>
    );
  }
}

export default Home;
