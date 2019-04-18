import React, { Component } from "react";
import axios from "axios";

class UsersPosts extends Component {
  constructor() {
    super();
    this.state = {
      singlePost: []
    };
  }
  componentDidMount() {
    this.getPosts();
  }
  getPosts = () => {
    axios
      .get("/posts/1")
      .then(res => {
        this.setState({
          singlePost: res.data.post
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  displaySinglePost = () => {
    let { singlePost } = this.state;

    return (
      <div>
        <h1>{singlePost.title}</h1>
        <img src={singlePost.post_url}alt='imageNotWorking'></img>
      </div>
    );
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <p>HELLO</p>
        {this.displaySinglePost()}
      </div>
    );
  }
}
export default UsersPosts;
// this all post by currentUser
// axios call for all post by user
