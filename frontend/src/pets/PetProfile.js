import React, { Component } from "react";
// import { Link } from 'react-router-dom';
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
      pet_id: "",
      organization_id: "",
      adopt: false,
      favoritedAnimalsByUser: [],
      Andres: []
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
        pet_id: id,
        organization_id: res.data.animal.organization_id
      });
    });
  };

  getFavoritedByUser = id => {
    console.log(id,"HERE");
    axios.get(`/favorited/users/ByEmail/${id}`).then(res => {
      this.setState({
        favoritedAnimalsByUser: res.data.favorited
      });

    });
  };
  // im getting the animals liked by the current user signed in.
  // now I want to map through the array so its just pet_id numbers
  // then set that in the state.
  //  then have and if and else statement for the button.
  // If that pet_id is included in the array of favorited pets do Unfavorite Me!
  //Else Favorite Me!

// .find would look into the object within array
// setting up the backend to only return the pet_id !!. Still an array of objects

  displayAnimals = () => {
    // debugger;
    let favoritedAnimals = this.state.favoritedAnimalsByUser.map(pet => {
      console.log(pet);
      return (
        <>
          <p>{pet.pet_id}</p>
        </>
      );
    })
  };

  //
  // filterByPet_Id = () => {
  //   let favoritedAnimals = this.state.favoritedAnimalsByUser.filter(pet => {
  //     if (pet.includes(this.state.pet_id)) {
  //       return pet;
  //     }
  //   });
  //   console.log(favoritedAnimals, "Something here ");
  // };
  favoriteAnAnimal = () => {
    axios
      .post(`/favorited`, {
        pet_id: this.state.pet_id
      })
      .then(res => {})
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

  unFavoriteAnimal = () => {
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
                  <button className="oneButton" onClick={this.favoriteAnAnimal}>
                    {" "}
                    Favorite Me!
                  </button>

                  <button className="oneButton" onClick={this.unFavoriteAnimal}>
                    {" "}
                    Unfavorite ME!
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
              <div>
                {this.displayPetProfile()}

              </div>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default PetProfile;
