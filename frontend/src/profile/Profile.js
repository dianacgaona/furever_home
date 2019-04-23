import React, { Component } from "react";
import FavoritedPets from "./FavoritedPets";
import AdoptedPets from "./AdoptedPets";
import UsersPosts from "./UsersPosts";
import AddPost from "./AddPost.js";
import { MyContext } from "../provider/MyProvider";
import { Paper, Avatar } from "@material-ui/core";
import "../css/profile.css";
import axios from 'axios'
class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  getPosts = async() => {

    await
    axios
      .get(`/posts/byUser/2`)
      .then(res => {
        this.setState({
          user_Posts: res.data.post
        });
        // console.log(res);
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

            
                <AddPost />) : (<div>no user</div>
                )}

              </Paper>

              <FavoritedPets />
              <UsersPosts currentUser={context.state.currentUser.id} />
              <AdoptedPets />
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Profile;
