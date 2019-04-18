import React, { Component } from 'react';
const axios = require('axios');

export const MyContext = React.createContext();

class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      organizations: [],
      selectedZip: ""

    };
  }

  componentDidMount() {
    this.getOrganization();
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
        this.setState({
          organizations: res.data.organizations,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSelect = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          functions: {
            loginUser: this.loginUser,
            handleSelect: this.handleSelect,
            handleSubmit: this.handleSubmit
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
