import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Paper } from '@material-ui/core';

import '../css/singlePost.css'

class SinglePost extends Component {
  constructor() {
    super();
    this.state = {
      singlePost: [],
      singlePostComments: []
    };
  }
  componentDidMount() {
    this.getPost(this.props.match.params.id);
    this.getCommentsForSinglePost();
  }

  getPost = id => {
    axios
      .get(`/posts/${id}`)
      .then(res => {
        this.setState({
          singlePost: res.data.post
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getCommentsForSinglePost = () => {
    axios
      .get("/comments/post/1")
      .then(res => {
        this.setState({
          singlePostComments: res.data.comment
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  displaySinglePost = () => {
    let { singlePost } = this.state;
    return (
      <div>
        <p className='postTitleCom'>{singlePost.title}</p>
        <p className='petTypeCom'>Tip for:   {singlePost.pet_type}s</p>
        <div><img src={singlePost.post_url} alt="" /></div>
        <Link to="/profile" className='userName'>By: {singlePost.username}</Link>
        <p className='body'>{singlePost.post_body}</p>
        <form>
          <input type='text' placeholder='Share your thoughts'/>
          <input type='submit' value='Post Comment'/>
        </form>
        <div>Comments:{this.displayComments()}</div>
      </div>
    );
  };

  addComment = (e) => {
  e.preventDefault()
  const commentInfos = {
    user_id: e.target[0].value,
    comment_body: e.target[1].value
  }
  axios.post('/comments', commentInfos)
  .then(() => {
    this.getCommentsForSinglePost()
  })
}

  displayComments = () => {
    let comments = this.state.singlePostComments.map((comment, i) => {
      return (
        <li key={i + 1}>
          <Link to="/profile" className='commentUser'>{comment.username}</Link>
          <br />
          <p className='commentBody'>{comment.comment_body}</p>
        </li>
      );
    });
    return (
      <>

        <ul>{comments}</ul>
      </>
    );
  };


  render() {
    return (
      <Paper style={{ padding: '2%' }}>
        <div>{this.displaySinglePost()}</div>
      </Paper>


    )
  }
}
export default SinglePost;
