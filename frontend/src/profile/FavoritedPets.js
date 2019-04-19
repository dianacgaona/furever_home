import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

class FavoritedPets extends Component {
  constructor() {
    super();

    this.state = {
      userFavs: []
    };
  }

  componentDidMount() {
    this.getFavorited();
  }

  getFavorited = () => {
    axios
      .get("/favorited/users/4")
      .then(res => {
        this.setState({
          userFavs: res.data.favorited
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  displayFavorites = () => {
    let favorites = this.state.userFavs.map((favorited, i) => {
      return (
        <img
          src={`https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/${
            favorited.pet_id
          }/1/?bust=1555622095&width=300`}
          alt=""
        />
      );
    });
    return <>{favorites}</>;
  };

  render() {
    console.log(this.state);
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <h1>Favorited Pets go here</h1>
              {this.displayFavorites()}
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default FavoritedPets;
