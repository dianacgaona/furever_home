import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

class OrganizationProfile extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          console.log(context);
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
