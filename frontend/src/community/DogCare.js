import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import axios from 'axios';
import { Paper, Grid } from '@material-ui/core';

import '../css/care.css';

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
        <div className='postGod'>
            <div className='fakePaper'>
              <div className='postDiv'>
                <div className='linkImg'>
                <Link  to={`/posts/${post.id}`}><img src={post.post_url} alt="" className='postImage'/></Link>
                </div>
                <div className='postInfo'>
                    <div>
                      <p className='postTitle'>{post.title}</p>
                    </div>
                    <div>
                      <p className='petType'>Tip for: {post.pet_type}s</p>
                    </div>
                    <div>
                      <p className='postBody'>{post.post_body.slice(0, 50) + '...'}
                  <Link to={`/posts/${post.id}`}>(read more)</Link></p>
                    </div>
                </div>
              </div>
            </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className='fakePageBorder'>
        <div>
          <p className='careAdvice'>Dog Care Advice </p>
          <div className='wholePost'>{this.displayDogPosts()}</div>
        </div>
      </div>
    );
  }
}

export default DogCare;
