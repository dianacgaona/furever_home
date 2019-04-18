import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

class OrganizationProfile extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          let shelters = context.state.organizations.map(shelter => {
            return (
              <>
                <option>{shelter.address.postcode}</option>
              </>
            );
          });

          let display = context.state.organizations.map(shelter => {
            return (
              <>
                <p>{shelter.id}</p>
                <h3>{shelter.name}</h3>
              </>
            );
          });
          return (
            <div>
              <form type="submit" onSubmit={context.functions.handleSubmit}>
                <select
                  name="context.state.selectedZip"
                  onChange={context.functions.handleSelect}
                >
                  <option value=""> </option>
                  {shelters}
                </select>
                <button type="submit">Submit</button>
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
