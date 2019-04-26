import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";
import "../css/petprofile.css";

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
        <div className="animal_div">
          <h1 className="animal_name">{profile.name}</h1>
          <div className="animal_info">
            <div>
              <img
                className="animal_pic"
                src={profile.photos[0].medium}
                alt=""
              />
            </div>
            <div>
              <h3 className="animal_detail">{profile.age}</h3>
              <h3 className="animal_detail">{profile.color}</h3>
              <h3 className="animal_detail">{profile.description}</h3>
              <h3 className="animal_detail">{profile.contact.address.city}</h3>
            </div>
          </div>
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
