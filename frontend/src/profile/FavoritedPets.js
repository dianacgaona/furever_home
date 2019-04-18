import React, { Component } from 'react';
// import axios from 'axios';
import { MyContext } from '../provider/MyProvider';

class FavoritedPets extends Component {
  constructor() {
    super();

    this.state = {};
  }

  // getFavorited = () => {
  //   axios.get()
  // }

  render() {
    return (
      


<MyContext.Consumer>
        {context => {
          return (
            <div>
              <h1>Favorited Pets go here</h1>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default FavoritedPets;
