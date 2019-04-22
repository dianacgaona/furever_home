import React, { Component } from 'react';
import FavoritedPets from './FavoritedPets';
import AdoptedPets from './AdoptedPets';
import UsersPosts from './UsersPosts';
import { MyContext } from '../provider/MyProvider';
import { Paper, Avatar } from '@material-ui/core';
import '../css/profile.css';

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
              <Paper style={{ padding: '8%' }}>
              {context.state.currentUser ? (
                <div>
                  <div className='usernameProf'>{context.state.currentUser.username}</div>
                  <div>
                  <Avatar alt="Remy Sharp" src={context.state.currentUser.profile_picture} style={{ marginRight: '-11%', marginTop: '-5%', width: '250px', height: '250px' }}
                  />
                  </div>
                  <div>{context.state.currentUser.about}</div>
                </div>
              ) : (
                <div>no user</div>
              )}
                </Paper>
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
