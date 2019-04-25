import React, { Component } from 'react';
import axios from 'axios';
import { MyContext } from '../provider/MyProvider';
import { Paper, Avatar } from '@material-ui/core';
import '../css/profile.css';
import { Link } from 'react-router-dom';

class FavoritedPets extends Component {
  constructor() {
    super();
    this.state = {
      userFavs: [],
    };
  }

  componentDidMount() {
    this.getFavorited(this.props.id);
  }

  getFavorited = id => {
    axios
      .get(`/favorited/users/${id}`)
      .then(res => {
        this.setState({
          userFavs: res.data.favorited,
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  displayFavorites = () => {
    let favorites = this.state.userFavs;
    return favorites.map(favorite => {
      console.log('favorites', favorite);
      return (
        <div key={favorite.id}>
          <Link to={`/animals/${favorite.pet_id}`}>
            <img
              src={`https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/${
                favorite.pet_id
              }/1/?bust=1555622095&width=300`}
              alt=""
              style={{ padding: '10px' }}
            />
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      


<MyContext.Consumer>
        {context => {
          return (
            <div>
              <Paper style={{ padding: '2%', marginTop: '1%' }}>
                <p className="favoritedTitle">Favorited Pets Go Here</p>
                <div className="favImg">{this.displayFavorites()}</div>
              </Paper>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default FavoritedPets;
