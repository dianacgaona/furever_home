import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from '../provider/MyProvider';
import '../css/petprofile.css';
// import Auth from "../utils/Auth.js";

class PetProfile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      pet_id: '',
      organization_id: '',
      organization: ''
    };
  }

  componentDidMount() {
    this.getPet(this.props.match.params.id);
    this.getOrganization();
  }

  getPet = id => {
    axios.get(`/petfinder/animals/${id}`).then(res => {
      console.log('ONE PET', res.data)
        this.setState({
        profile: res.data.animal,
        pet_id: id,
        organization_id: res.data.animal.organization_id,
      });
    });
  };

  getOrganization = () => {
    axios.get(`/petfinder/organizations/${this.state.organization_id}`)
      .then(res => {
        console.log('ORG ID?', this.props.match.params.id)
        this.setState({
          organization: res.data.organization,
        });
      })
      .catch(err => {
        console.log('ORGANIZATION???',err);
      });
  };

  favoriteAnAnimal = () => {
    debugger;
    axios
      .post(`/favorited`, {
        pet_id: this.state.pet_id,
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

              <Link to={'/pre-approval'}><button>Pre-Adoption Form</button></Link>

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
    console.log('this is state', this.state);
    return (



<MyContext.Consumer>
        {context => {
          // console.log('hello', context);
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
