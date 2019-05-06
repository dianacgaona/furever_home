import React, { Component } from 'react';
import axios from 'axios';
import { MyContext } from '../provider/MyProvider';
import { Paper } from '@material-ui/core';
import '../css/profile.css';
import '../css/favorited.css';
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
      .get(`/api/favorited/users/${id}`)
      .then(res => {
        this.setState({
          userFavs: res.data.favorited,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  displayFavorites = () => {
    let favorites = this.state.userFavs;
    return favorites.map(favorite => {
      return (
        <div className='favoriteContainer' key={favorite.id}>
          <Link to={`/animals/${favorite.pet_id}`}>
            <div className="favImgCont">
              <img
                src={`https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/${
                  favorite.pet_id
                }/1/?bust=1555622095&width=300`}
                alt=""
                style={{ padding: '10px' }}
              />
            </div>
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
                <p className="favoritedTitle">Favorite Pets</p>
                  <div className='favoritedPetImg'>{this.displayFavorites()}</div>
              </Paper>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default FavoritedPets;
