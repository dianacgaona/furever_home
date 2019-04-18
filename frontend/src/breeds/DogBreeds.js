import React, { Component } from "react";
import axios from "axios";

class DogCare extends Component {
  constructor() {
    super();

    this.state = {
      dogPost: []
    };
  }

  componentDidMount() {
    this.getDogPosts();
  }

  getDogPosts = () => {
    axios
      .get("/posts")
      .then(res => {
        console.log(res);
        this.setState({
          dogPost: res.data.posts
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  displayDogPosts = () => {
    let { dogPost } = this.state;
    return dogPost.map(post => {
      return (
        <div>
          <h1>{post.title}</h1>
          <p>Tip for: {post.pet_type}s</p>
          <p>{post.post_body}</p>
        </div>
      );
    });
  };

  render() {
    console.log(this.state, "state");
    return (
      <div>
        <h1>Dog Care Advice </h1>
        <div>{this.displayDogPosts()}</div>
      </div>
    );
  }
}

export default DogCare;
