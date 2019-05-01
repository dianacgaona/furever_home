import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";
import "../css/petprofile.css";
// import Auth from "../utils/Auth.js";

class PetProfile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      pet_id: ""
    };
  }
  // when I click the button it will grab the pet_id and setState
  componentDidMount() {
    this.getPet(this.props.match.params.id);
  }

  getPet = id => {
    axios.get(`/petfinder/animals/${id}`).then(res => {
      this.setState({
        profile: res.data.animal,
        pet_id: id
      });
    });
  };

  favoriteAnAnimal = () => {
    debugger;
    axios
      .post(`/favorited`, {
        pet_id: this.state.pet_id
      })
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  };

  unFavoriteAnimal = () => {
    debugger
    axios
      .delete(`/favorited/${this.state.pet_id}`)
      .then(() => {})
      .catch(err => {
        console.log(err);
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
              <button onClick={this.favoriteAnAnimal}> Favorite Me!</button>
              <button onClick={this.unFavoriteAnimal}> Unfavorite ME!</button>
              <h3 className="animal_detail">{profile.age}</h3>
              <h3 className="animal_detail">{profile.color}</h3>
              <h3 className="animal_detail">{profile.description}</h3>
              <h3 className="animal_detail">
                {profile.contact.address.city}, {profile.contact.address.state}
              </h3>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    console.log(typeof this.state.pet_id);
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
