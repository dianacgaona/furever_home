import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

class PetProfile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    this.getPet(this.props.match.params.id);
  }

  getPet = id => {
    axios.get(`/petfinder/animals/${id}`).then(res => {
      this.setState({
        profile: res.data.animal
      });
    });
  };

  displayPetProfile = () => {
    let { profile } = this.state;
    if (!profile.photos) {
      return <h2> Loading... </h2>;
    } else {
      return (
        <div>
          <h1>{profile.name}</h1>
          <div>
            <img src={profile.photos[0].medium} alt="" />
          </div>
          <h1>{profile.age}</h1>
          <h1>{profile.color}</h1>
          <h1>{profile.description}</h1>
          <h1>{profile.contact.address.city}</h1>
        </div>
      );
    }
  };

  render() {
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
