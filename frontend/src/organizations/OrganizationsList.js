import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../provider/MyProvider";
import "../css/organizations.css";

class OrganizationProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          let textSearch = context.state.shelter.map(shelter => {
            return (
              <div className="shelter_results_container">
                <Link
                  to={`/shelters-rescues/${shelter.id}`}
                  className="shelter_link"
                >
                  <p className="shelter_name">{shelter.name}</p>
                  <p className="shelter_location">
                    {shelter.address.city}, {shelter.address.state}
                  </p>
                  <p className="shelter_email">{shelter.email}</p>
                </Link>
              </div>
            );
          });
          let selectSearch = context.state.organizations.map(shelter => {
            if (shelter.borough === context.state.selectedBorough) {
              return (
                <div className="shelter_results_container">
                  <Link
                    to={`/shelters-rescues/${shelter.id}`}
                    className="shelter_link"
                  >
                    <p className="shelter_name">{shelter.name}</p>
                    <p className="shelter_location">
                      {shelter.address.city}, {shelter.address.state}
                    </p>
                    <p className="shelter_email">{shelter.email}</p>
                  </Link>
                </div>
              );
            } else {
              return <>{""}</>;
            }
          });
          return (
            <div className="shelter_container">
              <div className="shelter_search">
                <label className="shelter_label">Select a Borough</label>
                <form type="submit" onSubmit={this.handleSubmit}>
                  <select
                    name="selectedBorough"
                    onChange={context.functions.handleSelect}
                    className="shelter_select"
                  >
                    <option value="Manhattan">Manhattan</option>
                    <option value="Brooklyn">Brookyln</option>
                    <option value="Queens">Queens</option>
                    <option value="Bronx">Bronx</option>
                  </select>
                </form>
                <label className="shelter_label"> Search by Name</label>
                <form
                  type="submit"
                  onSubmit={context.functions.handleShelterSubmit}
                >
                  <input
                    type="text"
                    value={context.state.searchInput}
                    onChange={context.functions.handleInputChange}
                    placeholder="Shelter Name"
                    className="shelter_input"
                  />
                </form>
              </div>
              <div className="shelter_info">
                <label className="info_name">Name</label>
                <label className="info_location">Location</label>
                <label className='info_email'>E-mail</label>
              </div>
              {context.state.active ? textSearch : selectSearch}
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default OrganizationProfile;
