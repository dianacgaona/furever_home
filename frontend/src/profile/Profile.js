import React, { Component } from 'react';
import FavoritedPets from './FavoritedPets';
import AdoptedPets from './AdoptedPets';
import UsersPosts from './UsersPosts';
import AddPost from './AddPost.js';
import ProfileModal from './EditProfileModal.js';
import { MyContext } from '../provider/MyProvider';
import { Paper, Avatar } from '@material-ui/core';
import '../css/profile.css';
import Auth from '../utils/Auth.js';
import axios from 'axios';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      // profileUser: null,
      profileUser: {},
      user_Posts: [],

    };
  }

  componentDidMount() {
    this.getPosts();
    this.getSingleUser(this.props.match.params.id);
    // console.log(Auth.getToken());
  }

  getPosts = async () => {
    // const {currentUser} = this.state
    await axios
      .get(`/posts/byUser/${Auth.getToken()}`)
      .then(res => {
        this.setState({
          user_Posts: res.data.post,
        });
        console.log(res);
      })
      .catch(err => {
        // console.log(err);
      });
  };

  // WHEN THIS COMPONENT MOUNTS, SHOULD TAKE THE PARAM ID AND FETCH A USER WITH THAT ID.
  // STORE THAT USER IN YOUR state
  // USE THAT USER'S INFO TO FILL IN PROFILE PICS AND

  getSingleUser = () => {
      axios.get(`/users/${this.props.match.params.id}`)
      .then(res => {
              this.setState({ profileUser: res.data.user });
            }).catch(err => {
        console.log(this.props.match.params.id);
        console.log('SINGLE USER ERRR', err);
      });
    };

  // handleProfileUsername = (currentUser, profileUser) => {
  //     if (currentUser.id === Number(profileUser.id)) {
  //       return <p>{currentUser.username}</p>;
  //     } else {
  //       return <p>{profileUser.username}</p>;
  //     }
  //   } else {
  //     return <p>Not a User</p>;
  //   }
  // };

  render() {
    const profileId = this.props.match.params.id;
    return (



<MyContext.Consumer>
                {context => {
                  return (
                    <div>
                      <Paper style={{ padding: '8%' }}>
                        {context.state.currentUser ? (
                          <div>
                            <div className="usernameProf">
                              {this.state.profileUser.username}
                            </div>
                            <div>
                              <Avatar
                                alt="Remy Sharp"
                                src={this.state.profileUser.profile_picture}
                                style={{
                                  marginRight: '-11%',
                                  marginTop: '-5%',
                                  width: '250px',
                                  height: '250px',
                                }}
                              />
                            </div>
                          <div>{this.state.profileUser.about}</div>
                        </div>
                  ) : (
                  <div>no user</div>
                )}
                <AddPost getPosts={this.getPosts} />
                <ProfileModal />

              </Paper>

              <FavoritedPets id={this.props.match.params.id} />

              <UsersPosts
                currentUser={context.state.currentUser.id}
                user_Posts={this.state.user_Posts}
              />

              <AdoptedPets />
            </div>
          );
                }}
      </MyContext.Consumer>
    );
  }
}

export default Profile;
