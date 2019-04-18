import React, { Component } from 'react';
import axios from 'axios';

class CatCare extends Component {
  constructor() {
    super();

    this.state = {
      catPost: [],
    };
  }

  componentDidMount() {
    this.getCatPosts();
  }

  getCatPosts = () => {
    axios
      .get('/posts/cats')
      .then(res => {
        console.log(res);
        this.setState({
          catPost: res.data.post,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  displayCatPosts = () => {
    let { catPost } = this.state;
    return catPost.map(post => {
      return (
        <div>
          <img src={post.post_url} alt=""/>
          <h1>{post.title}</h1>
          <p>Tip for: {post.pet_type}s</p>
          <p>{post.post_body}</p>
        </div>
      );
    });
  };

  render() {
    console.log(this.state, 'state');
    return (
      <div>
        <h1>Cat Care Advice </h1>
        <div>{this.displayCatPosts()}</div>
      </div>
    );
  }
}

export default CatCare;
