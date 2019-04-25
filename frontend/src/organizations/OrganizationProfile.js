import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class OrganizationProfile extends Component {
  constructor() {
    super();

    this.state = {
      organization: {},
      animals: []
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
        this.setState({
          organization: res.data.organization
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getAnimals = id => {
    axios({
      url: "/petfinder/animalquery",
      method: "post",
      headers: {},
      data: `organization=${id}`
    }).then(res => {
      this.setState({
        animals: res.data.data.animals
      });
    });
  };

  displayAnimals = () => {
    // debugger;
    let animals = this.state.animals;
    if (!animals.length) {
      return (
        <div>
          <h1>No pets available at the moment. Come back later!</h1>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/31%2B1BFEVV9L._SX425_.jpg"
            alt=""
          />
        </div>
      );
    } else {
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
    }
  };

  render() {
    let organization = this.state.organization;
    let address = organization.address;
    // console.log("animals", this.state.animals);
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
          ""
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
          <h3>Buddies available to take home </h3>
          <div>{this.displayAnimals()}</div>
        </div>
      </div>
    );
  }
}

export default OrganizationProfile;
