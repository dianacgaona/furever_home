import React, { Component } from 'react';
import FavoritedPets from './FavoritedPets';
import AdoptedPets from './AdoptedPets';
import UsersPosts from './UsersPosts';
import AddPost from './AddPost.js';
import ProfileModal from './EditProfileModal.js';
import { MyContext } from '../provider/MyProvider';
import '../css/profile.css';
import axios from 'axios';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profileUser: {},
      user_Posts: [],
    };
  }

  componentDidMount() {
    this.getPosts(this.props.match.params.id);
    this.getSingleUser(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getPosts();
      this.getSingleUser(this.props.match.params.id);
    }
  }

  getPosts = () => {
    debugger
    axios
      .get(`/api/posts/byUser/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          user_Posts: res.data.post,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getSingleUser = () => {
    axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          profileUser: res.data.user,
        });
      })
      .catch(err => {
        console.log('SINGLE USER ERROR', err);
      });
  };

  render() {
    return (
      


<MyContext.Consumer>
        {context => {
          return (
            <div className="profile_container">
              {context.state.currentUser ? (
                <div className="profile_info">
                  <div className="info_left">
                    <div className="pic_div">
                      <img
                        src={this.state.profileUser.profile_picture}
                        alt=""
                        className="profile_pic"
                      />
                    </div>
                    {this.state.profileUser.id === this.props.currentUser.id ? (
                      <div className="profile_buttons">
                        <AddPost
                          getPosts={this.getPosts}
                          user_Posts={this.state.user_Posts}
                        />
                        <ProfileModal
                          oldState={this.state}
                          getSingleUser={this.getSingleUser}
                        />
                      </div>
                    ) : null}
                  </div>

                  <div className="info_right">
                    <div className="profile_name">
                      {this.state.profileUser.username}
                    </div>
                    <div className="profile_about">
                      "{this.state.profileUser.about}"
                    </div>
                  </div>
                </div>
              ) : (
                <div>no user</div>
              )}

              <FavoritedPets id={this.props.match.params.id} />
              <UsersPosts
                currentUser={context.state.currentUser.id}
                user_Posts={this.state.user_Posts}
              />
              <AdoptedPets id={this.props.match.params.id} />
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Profile;
