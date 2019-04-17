import React, { Component } from 'react';
import FavoritedPets from './FavoritedPets';
import { MyContext } from '../provider/MyProvider';

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
              <FavoritedPets />
              {context.state.currentUser ? (
                <div>
                  <div>{context.state.currentUser.username}</div>
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
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Profile;
