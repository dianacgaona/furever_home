import React, { Component } from "react";
import FavoritedPets from "./FavoritedPets";
import AdoptedPets from "./AdoptedPets";
import UsersPosts from "./UsersPosts";
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
              {context.state.currentUser ? (
                <div>
                  <h1>{context.state.currentUser.username}</h1>
                  <div>
                    <img
                      src={context.state.currentUser.profile_picture}
                      width="250px"
                      alt=""
                    />
                  </div>
                  <div>{context.state.currentUser.about}</div>
                </div>
              ) : (
                <div>no user</div>
              )}
              <FavoritedPets />
              <UsersPosts />
              <AdoptedPets />
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Profile;
