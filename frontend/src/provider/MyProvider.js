import React, { Component } from 'react';
import Auth from '../utils/Auth';

const axios = require('axios');

export const MyContext = React.createContext();

class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      isLoggedIn: false,
      organizations: [],
      selectedZip: '',
    };
  }

  componentDidMount() {
    this.getOrganization();
    this.checkAuthenticateStatus();
  }

  handleSelect = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  loginUser = currentUser => {
    this.setState({
      currentUser: currentUser,
    });
  };

  getOrganization = () => {
    axios
      .get('/petfinder/organizations')
      .then(res => {
        this.setState({
          organizations: res.data.organizations,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  checkAuthenticateStatus = () => {
    axios.get('/users/isloggedin').then(currentUser => {
      if (currentUser.data.email === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          email: Auth.getToken(),
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
            handleSelect: this.handleSelect,
            handleSubmit: this.handleSubmit,
          },
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
