import React, { Component } from "react";
import Slider from "react-slick";

let dog1 = require("../assets/puppies.jpg");
let cat2 = require("../assets/forestcat.jpg");
let dog3 = require("../assets/puppycut.jpg");
let cat4 = require("../assets/cat4.jpeg");

class Wallpaper extends Component {
  render() {
    var settings = {
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      draggable: false,
      fade: true,
      infinite: true,
      lazyLoad: "on-demand",
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 4000,
      waitForAnimate: true
    };
    return (
      <div>
        <div className="carousel">
          <p className="greeting">WHERE PEOPLE FIND THEIR FURIENDS</p>
          <Slider {...settings}>
            <img src={dog1} alt="" className="one" />
            <img src={cat2} alt="" className="two" />
            <img src={dog3} alt="" className="three" />
            <img src={cat4} alt="" className="four" />
          </Slider>
        </div>
      </div>
    );
  }
}

export default Wallpaper;
