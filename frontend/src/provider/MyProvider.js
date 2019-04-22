import React, { Component } from "react";
import { getZips } from "../NYCZipcode.js";
import Auth from "../utils/Auth";
const axios = require("axios");

export const MyContext = React.createContext();

class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      organizations: [],
      isLoggedIn: false,
      searchInput: "",
      shelter: [],
      active: false,
      selectedBorough: "Manhattan"
    };
  }

  componentDidMount() {
    this.getOrganization();
    this.checkAuthenticateStatus();
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

  checkAuthenticateStatus = () => {
    axios.post("/users/isloggedin").then(currentUser => {
      if (currentUser.data.email === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          currentUser: currentUser.data
        });
      } else {
        if (currentUser.data.email) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
  };

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };

  handleSelect = e => {
    this.setState({
      [e.target.name]: e.target.value,
      active: false
    });
  };

  handleInputChange = e => {
    this.setState({ searchInput: e.target.value });
  };

  handleShelterSubmit = e => {
    e.preventDefault();
    let search = this.state.organizations.filter(shelter => {
      return shelter.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });
    this.setState({
      searchInput: "",
      shelter: search,
      active: true
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          functions: {
            loginUser: this.loginUser,
            logoutUser: this.logoutUser,
            handleInputChange: this.handleInputChange,
            handleShelterSubmit: this.handleShelterSubmit,
            handleSelect: this.handleSelect
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
