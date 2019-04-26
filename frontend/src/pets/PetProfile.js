import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";
import "../css/petprofile.css";

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
