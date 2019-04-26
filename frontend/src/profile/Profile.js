import React, { Component } from 'react';
import FavoritedPets from './FavoritedPets';
import AdoptedPets from './AdoptedPets';
import UsersPosts from './UsersPosts';
import AddPost from './AddPost.js';
import ProfileModal from './EditProfileModal.js';
import { MyContext } from '../provider/MyProvider';
import { Paper, Avatar } from '@material-ui/core';
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

  getPosts = id => {
    axios
      .get(`/posts/byUser/${id}`)
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
      .get(`/users/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ profileUser: res.data.user });
      })
      .catch(err => {
        console.log("SINGLE USER ERROR", err);

      });
  };

  render() {
    return (



<MyContext.Consumer>
          {context => {
            return (
              <div>
                <Paper style={{ padding: '8%' }}>
                  <div className='container'>
                  {context.state.currentUser ? (
                    <div>
                      <div className="usernameProf">
                        {this.state.profileUser.username}
                      </div>
                      <div className='profilePicCont'>
                        <Avatar
                          className='profilePic'
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
                      <div className='aboutMe'>{this.state.profileUser.about}</div>
                    </div>
                  ) : (
                    <div>no user</div>
                  )}

                {this.state.profileUser.id === this.props.currentUser.id ? (
                  <div>
                    <AddPost getPosts={this.getPosts} />
                    <ProfileModal getSingleUser={this.getSingleUser}/>
                  </div>
                  ) :
                  null}
                  </div>
                </Paper>

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
