import React, { Component } from 'react';
import Slider from 'react-slick';

let dog1 = require('./assets/puppies.jpg');
let cat2 = require('./assets/cat2.jpg');
let dog3 = require('./assets/puppy3.jpeg');
let cat4 = require('./assets/cat4.jpeg');
let dog5 = require('./assets/puppy5.jpeg');

class Wallpaper extends Component {
  render() {
    var settings = {
      arrows: true,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      draggable: false,
      fade: true,
      infinite: true,
      lazyLoad: 'progressive',
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 900,
      waitForAnimate: true,
    };
    return (
      <div className='carousel'>
        <Slider {...settings}>
            <img src={dog1} alt=''/>
            <img src={cat2} alt=''/>
            <img src={dog3} alt=''/>
            <img src={cat4} alt=''/>
        </Slider>
      </div>
  );
  }
}

export default Wallpaper;
