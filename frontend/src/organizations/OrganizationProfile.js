import React, { Component } from 'react';
import axios from 'axios';
import { MyContext } from '../provider/MyProvider';

class OrganizationProfile extends Component {
  constructor() {
    super();

    this.state = {
      adoptedPets: {},
    };
  }

  componentDidMount() {
    this.getOrganization();
  }

  getOrganization = () => {
    axios
      .get('/petfinder/organizations')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
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
