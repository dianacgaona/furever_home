import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

class OrganizationProfile extends Component {
  constructor() {
    super();
    this.state = {
      selectedBorough: ""
    };
  }

  handleSelect = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          let display = context.state.organizations.map(shelter => {
            if (shelter.borough === this.state.selectedBorough) {
              return (
                <>
                  <p>{shelter.id}</p>
                  <h3>{shelter.name}</h3>
                  <p>
                    {shelter.address.city},{shelter.address.state}
                  </p>
                </>
              );
            } else {
              return <>{""}</>;
            }
          });
          return (
            <div>
              <form type="submit" onSubmit={this.handleSubmit}>
                <select name="selectedBorough" onChange={this.handleSelect}>
                  <option value=""> </option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Brooklyn">Brookyln</option>
                  <option value="Queens">Queens</option>
                  <option value="Bronx">Bronx</option>
                  <option value="Staten Island">Staten Island</option>
                </select>
              </form>
              <div>{display}</div>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default OrganizationProfile;
