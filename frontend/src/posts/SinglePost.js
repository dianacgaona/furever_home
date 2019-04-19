import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        console.log(res);
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
        <Link to="/profile">{singlePost.username}</Link>
        <h1>{singlePost.title}</h1>
        <h3>Tip for: {singlePost.pet_type}s</h3>
        <img src={singlePost.post_url} alt="" />
        <p>{singlePost.post_body}</p>
        <div>Comments:{this.displayComments()}</div>
      </div>
    );
  };

  displayComments = () => {
    let comments = this.state.singlePostComments.map((comment, i) => {
      return (
        <li key={i + 1}>
          <Link to="/profile">{comment.username}</Link>
          <br />
          {comment.comment_body}
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
    console.log(this.state);

    return <div>{this.displaySinglePost()}</div>;
  }
}
export default SinglePost;

// <li><Link to="/react">React</Link></li>
