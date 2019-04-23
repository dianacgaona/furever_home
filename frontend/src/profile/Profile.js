import React, { Component } from "react";
import FavoritedPets from "./FavoritedPets";
import AdoptedPets from "./AdoptedPets";
import UsersPosts from "./UsersPosts";
import AddPost from "./AddPost.js";
import { MyContext } from "../provider/MyProvider";
import { Paper, Avatar } from "@material-ui/core";
import "../css/profile.css";
import Auth from "../utils/Auth.js";
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profileUser: []
    };
  }
  componentDidMount() {
    this.getPosts();
    // console.log(Auth.getToken());
  }

  getPosts = async () => {
    // const {currentUser} = this.state
    await axios
      .get(`/posts/byUser/${Auth.getToken()}`)
      .then(res => {
        this.setState({
          user_Posts: res.data.post
        });
        console.log(res);
      })
      .catch(err => {
        // console.log(err);
      });
  };

  // WHEN THIS COMPONENT MOUNTS, SHOULD TAKE THE PARAM ID AND FETCH A USER WITH THAT ID.
  // STORE THAT USER IN YOUR state
  // USE THAT USER'S INFO TO FILL IN PROFILE PICS AND STUFF

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <Paper style={{ padding: "8%" }}>
                {context.state.currentUser ? (
                  <div>
                    <div className="usernameProf">
                      {context.state.currentUser.username}
                    </div>
                    <div>
                      <Avatar
                        alt="Remy Sharp"
                        src={context.state.currentUser.profile_picture}
                        style={{
                          marginRight: "-11%",
                          marginTop: "-5%",
                          width: "250px",
                          height: "250px"
                        }}
                      />
                    </div>
                    <div>{context.state.currentUser.about}</div>
                  </div>
                ) : (
                  <div>no user</div>
                )}
                <AddPost getPosts={this.getPosts} />) : (<div>no user</div>
                )}
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
