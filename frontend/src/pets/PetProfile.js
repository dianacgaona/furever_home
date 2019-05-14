import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";
import Form from "../PreApproval/Form";
import "../css/petprofile.css";
import "../css/adopted.css";
import Auth from "../utils/Auth.js";

class PetProfile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      pet_id: null,
      organization_id: "",
      adopt: false,
      favoritedAnimalsByUser: []
    };
  }

  componentDidMount() {
    this.getPet(this.props.match.params.id);
    this.getFavoritedByUser(Auth.getToken());
  }

  getPet = id => {
    axios.get(`/api/petfinder/animals/${id}`).then(res => {
        this.setState({
        profile: res.data.animal,
        pet_id: parseInt(id),
        organization_id: res.data.animal.organization_id
      });
    });
  };

  getFavoritedByUser = id => {
    axios.get(`/favorited/users/ByEmail/${id}`).then(res => {
      this.setState({
        favoritedAnimalsByUser: new Set(res.data.favorited)
      });
    });
  };

  favoriteAnAnimal = () => {
    axios
      .post(`/api/favorited`, {
        pet_id: this.state.pet_id,
      })
      .catch(err => {
        console.log(err);
      });
  };

  unFavoriteAnimal = () => {
    axios
      .delete(`/api/favorited/${this.state.pet_id}`)
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      adopt: !this.state.adopt
    });
  };

  displayPetProfile = () => {
    let { profile, pet_id, favoritedAnimalsByUser } = this.state;
    if (!profile.photos) {
      return <h2> Loading... </h2>;
    } else {
      return (
        <>
          {this.state.adopt ? (
            <>
              <Form profile={this.state.profile} />
            </>
          ) : (
            <div className="animal_div">
              <div className="animal_pic_div">
                <div className="animal_pic">
                  <img src={profile.photos[0].medium} alt="" />
                </div>
              </div>
              <div className="animal_info_div">
                <div className="animal_name_div">
                  <h1 className="animal_profile_name">{profile.name}</h1>
                </div>
                <div className="animal_age_location">
                  <div className="animal_age">{profile.age}</div>
                  <div className="animal_divider"> {" • "} </div>
                  <div className="animal_location">
                    {profile.contact.address.city},{" "}
                    {profile.contact.address.state}
                  </div>
                  <div className="animal_divider"> {" • "} </div>
                  <div className="animal_color">{profile.colors.primary}</div>
                </div>
                <div className="buttons_div">
                  <button
                    className="animal_button"
                    onClick={
                      !favoritedAnimalsByUser.has(pet_id)
                        ? this.favoriteAnAnimal
                        : this.unFavoriteAnimal
                    }
                  >
                    {!favoritedAnimalsByUser.has(pet_id)
                      ? "Favorite Me"
                      : "UnFavorite Me!"}
                  </button>

                  <button className="animal_button" onClick={this.handleSubmit}>
                    Pre-Adoption Form
                  </button>
                </div>
                <div className="animal_description">{profile.description}</div>
              </div>
            </div>
          )}
        </>
      );
    }
  };

  render() {
    console.log(this.state, "Andres Here");

    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div className="animal_profile_container">
              {this.displayPetProfile()}
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default PetProfile;
