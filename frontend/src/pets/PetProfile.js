import React, { Component } from 'react';
import axios from 'axios';
import { MyContext } from '../provider/MyProvider';

class PetProfile extends Component {
  constructor() {
    super();

    this.state = {
      profile: {},
    };
  }

  componentDidMount() {
    // debugger;
    this.getPet(this.props.match.params.id);
  }

  getPet = id => {
    axios.get(`/petfinder/animals/${id}`).then(res => {
      debugger;
      this.setState({
        profile: res.data.animal,
      });
    });
  };

  displayPetProfile = () => {
    let { profile } = this.state;
    return (
      <div>
        <h1>{profile.name}</h1>
        <div>
          <img src={profile.photos} alt="" />
        </div>
      </div>
    );
  };

  render() {
    console.log('Profile', this.state.profile);
    return (
      


<MyContext.Consumer>
        {context => {
          return (
            <div>
              <div>{this.displayPetProfile()}</div>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default PetProfile;
