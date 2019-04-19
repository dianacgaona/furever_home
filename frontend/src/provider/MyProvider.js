import React, { Component } from 'react';
import { getZips } from '../NYCZipcode.js';
import Auth from '../utils/Auth';
const axios = require('axios');

export const MyContext = React.createContext();

class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      organizations: [],
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.getOrganization();
    this.checkAuthenticateStatus();
  }

  loginUser = currentUser => {
    this.setState({
      currentUser: currentUser,
    });
  };

  getOrganization = () => {
    axios
      .get('/petfinder/organizations')
      .then(res => {
        let zips = getZips();
        res.data.organizations.forEach(organization => {
          organization['borough'] = zips[organization.address.postcode];
        });
        this.setState({
          organizations: res.data.organizations,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  checkAuthenticateStatus = () => {
    axios.post('/users/isloggedin').then(currentUser => {
      if (currentUser.data.email === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          currentUser: currentUser.data,
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
      .post('/users/logout')
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          functions: {
            loginUser: this.loginUser,
          },
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
