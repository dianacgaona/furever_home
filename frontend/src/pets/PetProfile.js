import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from '../provider/MyProvider';
import Form from '../PreApproval/Form'
import '../css/petprofile.css';
import '../css/adopted.css'
// import Auth from "../utils/Auth.js";

class PetProfile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      pet_id: '',
      organization_id: '',
      adopt: false
    };
  }

  componentDidMount() {
    this.getPet(this.props.match.params.id);
  }

  getPet = id => {
    axios.get(`/api/petfinder/animals/${id}`).then(res => {
        this.setState({
        profile: res.data.animal,
        pet_id: id,
        organization_id: res.data.animal.organization_id,
      });
    });
  };

  favoriteAnAnimal = () => {
    axios
      .post(`/api/favorited`, {
        pet_id: this.state.pet_id,
      })
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  };


  handleSubmit = e => {
  e.preventDefault()
  this.setState({
    adopt: !this.state.adopt
  })
}

  unFavoriteAnimal = () => {
    axios
      .delete(`/api/favorited/${this.state.pet_id}`)
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
          {this.state.adopt ?
           <>
            <Form profile={this.state.profile}/>
           </>
        :
        <div className="animal_div">
          <div className='animalInfo'>
            <div className="animal_name">{profile.name}</div>
            <div className='animalAge'>{profile.age}</div>
            <div className='animalCity'>{profile.contact.address.city}, {profile.contact.address.state}</div>
            <div className='animalColor'>{profile.colors.primary}</div>
            <div className='description'>{profile.description}</div>
            <div>
          </div>
            <div className='animalButton'>
              <button className='oneButton'
                      onClick={this.favoriteAnAnimal}> Favorite Me!</button>

              <button className='oneButton'
                      onClick={this.unFavoriteAnimal}> Unfavorite ME!</button>

               <button className='oneButton'
                       onClick={this.handleSubmit}>Pre-Adoption Form</button>
            </div>
           </div>
          <div className='animalPic'>
            <figure>
            <img
               src={profile.photos[0].medium}
               alt=""
              />
              </figure>
          </div>
        </div>
      }
      </>
      );
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
