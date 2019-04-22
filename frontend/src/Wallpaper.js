import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

let dog1 = require('./assets/puppies.jpg');
let cat2 = require('./assets/cat2.jpg');
let dog3 = require('./assets/puppy3.jpeg');
let cat4 = require('./assets/cat4.jpeg');
let dog5 = require('./assets/puppy5.jpeg');

class Wallpaper extends Component {
  render() {
    return (
      <Carousel autoPlay>
      <div>
          <img src={dog1} alt=''/>
      </div>
      <div>
          <img src={cat2} alt=''/>
      </div>
      <div>
          <img src={dog3} alt=''/>
      </div>
      <div>
          <img src={cat4} alt=''/>
      </div>
      </Carousel>
  );}
}

export default Wallpaper;

ReactDOM.render(<Wallpaper/>, document.querySelector('.demo-carousel'));
