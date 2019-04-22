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
      console.log(res.data);
    });
  };

  render() {
    console.log(this.props, "props");
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <h1>Organizations go here</h1>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default OrganizationProfile;
