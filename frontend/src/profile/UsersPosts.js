import React, { Component } from "react";
import axios from "axios";
import { Paper } from "@material-ui/core";
import "../css/profile.css";
import { MyContext } from "../provider/MyProvider";


class UsersPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_Posts: [],
      currentUser: this.props.currentUser
    };
  }

  componentDidMount() {
  this.getPosts();
    this.displayPosts();
  }
  // componentDidUpdate(){
  // this.displayPosts()
  // }
  getPosts = async() => {
    // const {currentUser} = this.state
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

  displayPosts = () => {
    let posts = this.state.user_Posts.map((post, i) => {
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
    console.log(this.state, 'state');
    console.log(this.props, 'props');
    return (
      <MyContext.Consumer>
        {context => {
          // this.getPosts(context.state.currentUser.id)
          return <div> {this.displayPosts()} </div>;
        }}
      </MyContext.Consumer>
    );
  }
}
export default UsersPosts;
