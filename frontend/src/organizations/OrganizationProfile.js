import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/shelterprofile.css";

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
    let animals = this.state.animals;
    if (!animals.length) {
      return (
        <div>
          <h1 className='notAvail'>No pets available at the moment. Come back later!</h1>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/31%2B1BFEVV9L._SX425_.jpg"
            alt="" className='notAvailPic'
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
                <div className='animalPicture'>
                  <img src={animal.photos[0].medium} alt="" />
                </div>
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
    return (
      <div className="organization_div">
        <h1 className="organization_name">{organization.name}</h1>
        <div className="organization_info">
          <div className="organization_pic">
            <img
              src="https://i.pinimg.com/736x/9b/a3/4d/9ba34d2df7de09b8694ab6bddf2c8b61--animal-shelter-logo-inspiration.jpg"
              alt=""
            />
          </div>
          <div>
            {address === undefined ? (
              <div>
                <p>Address not available</p>
              </div>
            ) : (
              <div className="organization_details">
                <div className='locationText'>Location:</div>
                <div className='cityState'>
                  {address.city}, {address.state}
                </div>
              </div>
            )}
            <div className="organization_details">
              <div className='contactUs'>Contact us at: </div>
              <div className='organEmail'>{organization.email}</div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="organization_divider">
            Furends Available to Take Home{" "}
          </h3>
          <div className="organization_animals">{this.displayAnimals()}</div>
        </div>
      </div>
    );
  }
}

export default OrganizationProfile;
