import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import axios from 'axios';
import { Paper, Grid } from '@material-ui/core';

class DogCare extends Component {
  constructor() {
    super();

    this.state = {
      dogPost: [],
    };
  }

  componentDidMount() {
    this.getDogPosts();
  }

  getDogPosts = () => {
    axios
      .get('/posts/dogs')
      .then(res => {
        debugger;
        console.log(res);
        this.setState({
          dogPost: res.data.post,
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
          <img src={post.post_url} alt=""/>
          <p>{post.title}</p>
          <p>Tip for: {post.pet_type}s</p>
          <p>{post.post_body.slice(0, 50) + '...'}<Link to={`/posts/${post.id}`}>more</Link></p>
        </div>
      );
    });
  };

  render() {
    console.log(this.state, 'state');
    return (
      <Paper>
      <div>
        <p className='careAdvice'>Dog Care Advice </p>
        <div className='wholePost'>{this.displayDogPosts()}</div>
      </div>
      </Paper>
    );
  }
}

export default DogCare;
