import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

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
        console.log(res.data.organization);
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

  render() {
    let organization = this.state.organization;
    let shelterPic = organization.photos;
    let address = organization.address;
    let animals = this.state.animals.map(animal => {
      let photo = animal.photos;
      return (
        <>
          <p>{animal.id}</p>
          <p>{animal.name}</p>
          {photo.length === 0 ? (
            "I need a picture"
          ) : (
            <img src={animal.photos[0].medium} alt="" />
          )}
        </>
      );
    });
    return (
      <div>
        <img
          src="https://i.pinimg.com/736x/9b/a3/4d/9ba34d2df7de09b8694ab6bddf2c8b61--animal-shelter-logo-inspiration.jpg"
          alt=""
        />
        <h1>{organization.name}</h1>
        {address === undefined ? (
          ""
        ) : (
          <p>
            {address.city}, {address.state}
          </p>
        )}
        <p>{organization.email}</p>
        {animals}
      </div>
    );
  }
}

export default OrganizationProfile;
