import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import axios from 'axios';
import '../css/care.css';
import { Paper, Grid } from '@material-ui/core';

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
      <Paper>
        <div>
          <p className='careAdvice'>Cat Care Advice </p>
            <div className='wholePost'>{this.displayCatPosts()}</div>
        </div>
      </Paper>
    );
  }
}

export default CatCare;
