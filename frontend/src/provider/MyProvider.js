import React, { Component } from "react";
import { getZips } from "../NYCZipcode.js";
const axios = require("axios");

export const MyContext = React.createContext();

class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      organizations: []
    };
  }

  componentDidMount() {
    this.getOrganization();
  }

  loginUser = currentUser => {
    this.setState({
      currentUser: currentUser
    });
  };

  getOrganization = () => {
    axios
      .get("/petfinder/organizations")
      .then(res => {
        let zips = getZips();
        res.data.organizations.forEach(organization => {
          organization["borough"] = zips[organization.address.postcode];
        });
        this.setState({
          organizations: res.data.organizations
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          functions: {
            loginUser: this.loginUser
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
