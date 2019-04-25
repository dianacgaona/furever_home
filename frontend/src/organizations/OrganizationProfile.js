import React, { Component } from 'react';
import axios from 'axios';
import { MyContext } from '../provider/MyProvider';
import { Link } from 'react-router-dom';

class OrganizationProfile extends Component {
  constructor() {
    super();

    this.state = {
      organization: {},
      animals: [],
    };
  }

  componentDidMount() {
    this.getOrganization(this.props.match.params.id);
    this.getAnimals(this.props.match.params.id);
  }

  getOrganization = id => {
    axios
      .get(`/petfinder/organizations/${id}`)
      .then(res => {
        console.log(res.data.organization);
        this.setState({
          organization: res.data.organization,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getAnimals = id => {
    axios({
      url: '/petfinder/animalquery',
      method: 'post',
      headers: {},
      data: `organization=${id}`,
    }).then(res => {
      this.setState({
        animals: res.data.data.animals,
      });
    });
  };

  displayAnimals = () => {
    let animals = this.state.animals;
    return animals.map(animal => {
      let photo = animal.photos;
      return (
        <div key={animal.id}>
          <Link to={`/animals/${animal.id}`}>
            <h1>{animal.name}</h1>
          </Link>
          {photo.length === 0 ? (
            <div>
              <img
                src="https://ak-s.ostkcdn.com/img/mxc/Missing-Image_Dog.png"
                alt=""
              />
            </div>
          ) : (
            <Link to={`/animals/${animal.id}`}>
              <img src={animal.photos[0].medium} alt="" />
            </Link>
          )}
        </div>
      );
    });
  };

  render() {
    let organization = this.state.organization;
    let address = organization.address;

    return (
      <div>
        <h1>{organization.name}</h1>
        <div>
          <img
            src="https://i.pinimg.com/736x/9b/a3/4d/9ba34d2df7de09b8694ab6bddf2c8b61--animal-shelter-logo-inspiration.jpg"
            alt=""
          />
        </div>

        {address === undefined ? (
          ''
        ) : (
          <div>
            <p>Location:</p>
            <p>
              {address.city}, {address.state}
            </p>
          </div>
        )}
        <div>
          <p>Contact us at: </p>
          <p>{organization.email}</p>
        </div>
        <div>
          <h3>Find a buddy to take home </h3>
          <div>{this.displayAnimals()}</div>
        </div>
      </div>
    );
  }
}

export default OrganizationProfile;
