import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";

import "../css/singlePost.css";

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
    this.getCommentsForSinglePost(this.props.match.params.id);
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

  getCommentsForSinglePost = id => {
    axios
      .get(`/comments/post/${id}`)
      .then(res => {
        this.setState({
          singlePostComments: res.data.comment
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addComment = e => {
    e.preventDefault();
    let commentValue = document.getElementById("myComment").value;
    const commentInfos = {
      user_id: this.props.currentUser.id,
      post_id: this.props.match.params.id,
      comment_body: commentValue
    };
    axios
      .post("/comments", commentInfos)
      .then(() => {
        this.getCommentsForSinglePost(this.props.match.params.id);
        document.getElementById("myComment").value = "";
      })
      .catch(err => {});
  };

  displaySinglePost = () => {
    let { singlePost } = this.state;
    return (
      <div>
        <p className="postTitleCom">{singlePost.title}</p>
        <p className="petTypeCom">Tip for: {singlePost.pet_type}s</p>
        <div>
          <img src={singlePost.post_url} alt="" />
        </div>
        <Link to="/profile" className="userName">
          By: {singlePost.username}
        </Link>
        <p className="body">{singlePost.post_body}</p>
        <form className="form" onSubmit={this.addComment}>
          <input
            id="myComment"
            type="text"
            placeholder="Share your thoughts"
            className="input"
          />
          <button type="submit" className="postComment">
            Post Comment
          </button>
        </form>
        <div>Comments:{this.displayComments(this.props.match.params.id)}</div>
      </div>
    );
  };

  displayComments = id => {
    let comments = this.state.singlePostComments.map((comment, i) => {
      return (
        <li key={i + 1}>
          <Link to={`/users/${comment.user_id}`} className="commentUser">
            {comment.username}
          </Link>
          <br />
          <p className="commentBody">{comment.comment_body}</p>
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
    console.log("LIKE COREY", this.state);
    return (
      <Paper style={{ padding: "2%" }}>
        <div>{this.displaySinglePost()}</div>
      </Paper>
    );
  }
}
export default SinglePost;
