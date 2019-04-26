import React, { Component } from "react";
import { Link } from "react-router-dom";
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
              <div className="border">
                <Paper style={{ width: "96%" }}>
                  <div className="shelterInfo">
                    <Link
                      to={`/shelters-rescues/${shelter.id}`}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "1%"
                      }}
                    >
                      <p style={{ textAlign: "left", fontSize: "26px" }}>
                        {shelter.name}
                      </p>
                      <p style={{ textAlign: "center" }}>
                        {shelter.address.city},{shelter.address.state}
                      </p>
                      <p style={{ textAlign: "right" }}>{shelter.email}</p>
                    </Link>
                  </div>
                </Paper>
              </div>
            );
          });
          let display = context.state.organizations.map(shelter => {
            if (shelter.borough === context.state.selectedBorough) {
              return (
                <div className="border">
                  <Paper style={{ width: "96%" }}>
                    <div className="shelterInfo">
                      <Link
                        to={`/shelters-rescues/${shelter.id}`}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          padding: "1%"
                        }}
                      >
                        <div className="shelterName">
                          <p style={{ textAlign: "left", fontSize: "26px" }}>
                            {shelter.name}
                          </p>
                        </div>
                        <div className="shelterAddress">
                          <p style={{ textAlign: "center" }}>
                            {shelter.address.city},{shelter.address.state}
                          </p>
                        </div>
                        <p
                          style={{ textAlign: "right" }}
                          className="shelterEmail"
                        >
                          {shelter.email}
                        </p>
                      </Link>
                    </div>
                  </Paper>
                </div>
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
