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
    let posts = this.props.user_Posts;
    return posts.map(post => {
      return (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h3 className="favoritedTitle">{post.title}</h3>
          </Link>
          <Link to={`/posts/${post.id}`}>
            <img src={post.post_url} alt="" className="favImg" />
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <React.Fragment>
              <Paper style={{ padding: "2%", marginTop: "1%" }}>
                <h3>Posts by User</h3>
                <div>{this.displayPosts()}</div>
              </Paper>
            </React.Fragment>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
export default withRouter(UsersPosts);
