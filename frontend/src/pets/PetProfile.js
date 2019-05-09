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
    axios.get(`/petfinder/animals/${id}`).then(res => {
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
      .post(`/favorited`, {
        pet_id: this.state.pet_id
      })
      .then(res => {
        this.setState({
          favoritedAnimalsByUser: this.state.favoritedAnimalsByUser.add(
            this.state.pet_id
          )
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  unFavoriteAnimal = () => {
    axios
      .delete(`/favorited/${this.state.pet_id}`)
      .then(() => {
        this.state.favoritedAnimalsByUser.delete(this.state.pet_id);
        this.setState({
          favoritedAnimalsByUser: this.state.favoritedAnimalsByUser
        });
      })
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
              <div className="animalInfo">
                <div className="animal_name">{profile.name}</div>
                <div className="animalAge">{profile.age}</div>
                <div className="animalCity">
                  {profile.contact.address.city},{" "}
                  {profile.contact.address.state}
                </div>
                <div className="animalColor">{profile.colors.primary}</div>
                <div className="description">{profile.description}</div>
                <div />
                <div className="animalButton">
                  <button
                    className="oneButton"
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

                  <button className="oneButton" onClick={this.handleSubmit}>
                    Pre-Adoption Form
                  </button>
                </div>
              </div>
              <div className="animalPic">
                <figure>
                  <img src={profile.photos[0].medium} alt="" />
                </figure>
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
