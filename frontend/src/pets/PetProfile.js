import React, { Component } from 'react';
import axios from 'axios';
import { MyContext } from '../provider/MyProvider';

class PetProfile extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    // debugger;
    this.getPet(this.props.match.params.id);
  }

  getPet = id => {
    axios.get(`/petfinder/animals/${id}`).then(res => {
      debugger;
    });
  };

  render() {
    return (
      


<MyContext.Consumer>
        {context => {
          return (
            <div>
              <h1> Pet Profile </h1>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default PetProfile;
