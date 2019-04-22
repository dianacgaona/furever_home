import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

class OrganizationProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          let shelterSearch = context.state.shelter.map(shelter => {
            return (
              <>
                <h3>{shelter.name}</h3>
                <p>
                  {shelter.address.city},{shelter.address.state}
                </p>
              </>
            );
          });
          let display = context.state.organizations.map(shelter => {
            if (shelter.borough === context.state.selectedBorough) {
              return (
                <>
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
                <select
                  name="selectedBorough"
                  onChange={context.functions.handleSelect}
                >
                  <option value="Manhattan">Manhattan</option>
                  <option value="Brooklyn">Brookyln</option>
                  <option value="Queens">Queens</option>
                  <option value="Bronx">Bronx</option>
                  <option value="Staten Island">Staten Island</option>
                </select>
              </form>
              <form
                type="submit"
                onSubmit={context.functions.handleShelterSubmit}
              >
                <input
                  type="text"
                  value={context.state.searchInput}
                  onChange={context.functions.handleInputChange}
                  placeholder="Search By Shelter Name"
                />
              </form>
              <div>{context.state.active ? shelterSearch : display}</div>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default OrganizationProfile;
