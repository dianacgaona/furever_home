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
      console.log(res.data.data.animals);
      this.setState({
        animals: res.data.data.animals
      });
    });
  };

  render() {
    let organization = this.state.organization;
    let address = organization.address;
    let animals = this.state.animals.map(animal => {
      console.log(animal.photos[0].full);
      return (
        <>
          <p>{animal.id}</p>
          <p>{animal.name}</p>
          <img src={animal.photos[0].full} alt="" />
        </>
      );
    });
    return (
      <div>
        <h1>{organization.name}</h1>
        {address === undefined ? (
          ""
        ) : (
          <p>
            {address.city}, {address.state}
          </p>
        )}
        {animals}
      </div>
    );
  }
}

export default OrganizationProfile;
