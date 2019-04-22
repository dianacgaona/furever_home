import React, { Component } from 'react';
import axios from 'axios';
import { Paper } from '@material-ui/core';
import '../css/profile.css';

class UsersPosts extends Component {
  constructor() {
    super();
    this.state = {
      singlePost: [],
    };
  }

  componentDidMount() {
    this.getPosts();
    this.displaySinglePost()
  }

  getPosts = () => {
    axios
      .get('/posts/1')
      .then(res => {
        this.setState({
          singlePost: res.data.post,
        });
        // console.log(res);
      })
      .catch(err => {
        // console.log(err);
      });
  };

  displaySinglePost = () => {
    let { singlePost } = this.state;

    return (
      <div>
        <Paper style={{ padding: '2%', marginTop: '1%' }}>
        <p className='favoritedTitle'>{singlePost.title}</p>
        <img src={singlePost.post_url}alt='imageNotWorking' className='favImg'></img>
        </Paper>
      </div>
    );
  };
// needs  to be changed since there will be multiple posts now. Which is why we wont see anything.
  render() {
    // console.log(this.state);
    return (
      <div>

        {this.displaySinglePost()}
      </div>
    );
  }
}
export default UsersPosts;
