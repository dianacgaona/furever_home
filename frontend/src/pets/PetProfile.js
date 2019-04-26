import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

class PetProfile extends Component {
  constructor() {
    super();

    this.state = {
      profile: {},
      pet_id:"",
    };
  }
// when I click the button it will grab the pet_id and setState
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
      // console.log(this.state.profile.photos[0].small);
      let { profile } = this.state;
      return (
        <div>
          <h1>Name: {profile.name}</h1>
          <h1>Age: {profile.age}</h1>
          <h1>Colors: {profile.colors.primary}</h1>
          <h1>About: {profile.description}</h1>
          <h1>
            Location: {profile.contact.address.city},
            {profile.contact.address.address1},{profile.contact.address.state},
            {profile.contact.address.postcode}
          </h1>
          <h1>Status: {profile.status}</h1>

          <div>
            <img src={profile.photos[0].medium} alt="" />
          </div>
        </div>
      );
    } else {
      return <h2> oH NO </h2>;
    }
  };
favoriteAnAnimal=()=>{
  axios
  .post().then(res=>{})
}

favoriteASong = (song, e) => {
    let changeButtonPlaceholder =
      this.state.toggle === "Favorite" ? "UnFavorite" : "Favorite";
    this.setState({
      toggle: changeButtonPlaceholder
    });
    e.preventDefault();
    console.log(song);
    if (!this.state.liked) {
      this.setState({
        liked: true,
        likedValue: 0
      });
      axios
        .post(`/favorites`, {
          user_id: this.state.sampleUser,
          pet_id: song.id
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
        });
    } else {
      this.setState({
        liked: false
      });
      axios.delete(`/favorites/${song.id}`).then(res => {
        console.log(res.data);
      });
    }
  };
  render() {
    // console.log("Profile", this.state.profile);
    console.log(this.state);

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
