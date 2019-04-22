import React, { Component } from "react";
import axios from "axios";
import "../css/organizations.css";
import { MyContext } from "../provider/MyProvider";
import Paper from "@material-ui/core/Paper";

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
                <Paper>
                  <div className="shelterInfo">
                    <p>
                      {shelter.name}
                      {", "}
                      {shelter.address.city},{shelter.address.state}
                    </p>
                  </div>
                </Paper>
              </>
            );
          });
          let display = context.state.organizations.map(shelter => {
            if (shelter.borough === context.state.selectedBorough) {
              return (
                <>
                  <Paper>
                    <div className="shelterInfo">
                      <p>
                        {shelter.name}
                        {", "}
                        {shelter.address.city},{shelter.address.state}
                      </p>
                    </div>
                  </Paper>
                </>
              );
            } else {
              return <>{""}</>;
            }
          });
          return (
            <div>
              <div className="search">
                <form type="submit" onSubmit={this.handleSubmit}>
                  {"Select a Borough"}{" "}
                  <select
                    name="selectedBorough"
                    onChange={context.functions.handleSelect}
                  >
                    <option value="Manhattan">Manhattan</option>
                    <option value="Brooklyn">Brookyln</option>
                    <option value="Queens">Queens</option>
                    <option value="Bronx">Bronx</option>
                  </select>
                </form>
                <form
                  type="submit"
                  onSubmit={context.functions.handleShelterSubmit}
                >
                  {" "}
                  {"Or"}{" "}
                  <input
                    type="text"
                    value={context.state.searchInput}
                    onChange={context.functions.handleInputChange}
                    placeholder="Search By Shelter Name"
                  />
                </form>
              </div>
              <div>{context.state.active ? shelterSearch : display}</div>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default OrganizationProfile;
