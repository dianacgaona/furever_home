import React, { Component } from "react";
import FavoritedPets from "./FavoritedPets";
import AdoptedPets from "./AdoptedPets";
import UsersPosts from "./UsersPosts";
import AddPost from "./AddPost.js";
import { MyContext } from "../provider/MyProvider";
import { Paper, Avatar } from "@material-ui/core";
import "../css/profile.css";
import Auth from '../utils/Auth.js'
import axios from 'axios'

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user_Posts:[]
    };
  }
  componentDidMount() {
    this.getPosts();
    // console.log(Auth.getToken());
  }

  getPosts = async() => {
    // const {currentUser} = this.state
    await
    axios
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


                <AddPost  getPosts={this.getPosts}/>) : (<div>no user</div>
                )}

              </Paper>

              <FavoritedPets />
              <UsersPosts currentUser={context.state.currentUser.id} user_Posts={this.state.user_Posts} />
              <AdoptedPets />
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Profile;
