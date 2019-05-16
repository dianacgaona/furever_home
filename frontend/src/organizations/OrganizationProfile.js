import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/shelterprofile.css";
import shelterimg from "../assets/animal_shelter.jpg";

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
      .get(`/api/petfinder/organizations/${id}`)
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
      url: "/api/petfinder/animalquery",
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
          <h1 className="notAvail">
            No pets available at the moment. Come back later!
          </h1>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/31%2B1BFEVV9L._SX425_.jpg"
            alt=""
            className="notAvailPic"
          />
        </div>
      );
    } else {
      return animals.map(animal => {
        let photo = animal.photos;
        return (
          <div clasName="animalBorder" style={{ padding: "1%" }}>
            <div key={animal.id} className="wholeAnimal">
              {photo.length === 0 ? (
                <div>
                  <img
                    src="https://ak-s.ostkcdn.com/img/mxc/Missing-Image_Dog.png"
                    alt=""
                  />
                  <Link to={`/animals/${animal.id}`}>
                    <div className="animalNames">{animal.name}</div>
                  </Link>
                </div>
              ) : (
                <Link to={`/animals/${animal.id}`}>
                  <div className="animalPicture">
                    <img src={animal.photos[0].medium} alt="" />
                  </div>
                  <Link to={`/animals/${animal.id}`}>
                    <div className="animalNames">
                      {animal.name.length > 20
                        ? animal.name.slice(0, 20) + "..."
                        : animal.name}
                    </div>
                  </Link>
                </Link>
              )}
            </div>
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
        <div className="organization_info">
          <div className="organization_pic_div">
            <img src={shelterimg} alt="" />
          </div>
          <div className="organization_details">
            <h1 className="organization_name">{organization.name}</h1>
            {address === undefined ? (
              <div>
                <p>Address not available</p>
              </div>
            ) : (
              <div>
                <div className="locationText">Location</div>
                <div className="cityState">
                  {address.city}, {address.state}
                </div>
              </div>
            )}
            <div className="contactUs">Contact Us </div>
            <div className="organEmail">{organization.email}</div>
          </div>
        </div>
        <div>
          <div className="organization_animals">
            <div>
              <h3 className="organization_divider">
                Furiends Ready to Go Home{" "}
              </h3>
            </div>
            <div className="organization_animal_list">
              {this.displayAnimals()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrganizationProfile;
