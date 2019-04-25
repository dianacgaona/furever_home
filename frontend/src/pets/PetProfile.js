import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

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
      // debugger;
      this.setState({
        profile: res.data.animal
      });
    });
  };

  displayPetProfile = () => {
    if (this.state.profile.photos) {
      console.log(this.state.profile.photos[0].small);
      let { profile } = this.state;
      return (
        <div>
          <h1>{profile.name}</h1>
          <h1>{profile.age}</h1>
          <h1>{profile.color}</h1>
          <h1>{profile.organization_id}</h1>
          <h1>{profile.description}</h1>
          <h1>{profile.contact.address.city}</h1>

          <h1>{profile.status}</h1>

          <div>
            <img src={profile.photos[0].medium} alt="" />
          </div>
        </div>
      );
    } else {
      return <h2> oH NO </h2>
    }
  };

  render() {
    // console.log("Profile", this.state.profile);
    console.log(this.state)

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
