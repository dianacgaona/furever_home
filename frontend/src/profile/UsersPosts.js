import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import "../css/profile.css";
import { MyContext } from "../provider/MyProvider";
import { Link, withRouter } from "react-router-dom";

class UsersPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: ""
    };
  }

  displayPosts = () => {
    let posts = this.props.user_Posts.map((post, i) => {
      return (
        <div key={i}>
          <Paper style={{ padding: "2%", marginTop: "1%" }}>
            <p className="favoritedTitle">{post.title}</p>
            <img src={post.post_url} alt="imageNotWorking" className="favImg" />
          </Paper>
        </div>
      );
    });

    return <>{posts}</>;
  };

  render() {
    console.log("Props: ", this.props);
    return (
      <MyContext.Consumer>
        {context => {
          return <div> {this.displayPosts()} </div>;
        }}
      </MyContext.Consumer>
    );
  }
}
export default withRouter(UsersPosts);
