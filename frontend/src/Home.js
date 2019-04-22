import React, { Component } from 'react';
import './css/home.css';
import Wallpaper from './Wallpaper';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <p className="greeting">WHERE PETS FIND THEIR PEOPLE</p>
        <div className='wallpaper'>
        <Wallpaper/>
        </div>
      </div>
    );
  }
}

export default Home;
