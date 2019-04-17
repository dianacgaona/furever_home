import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

class Profile extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              {context.state.currentUser.username ? (
                <div>{context.state.currentUser.username}</div>
              ) : (
                <div>no user</div>
              )}
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Profile;
