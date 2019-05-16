import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";
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
    this.displaySinglePost(this.props.match.params.id);
  }

  getPost = id => {
    axios
      .get(`/api/posts/${id}`)
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
      .get(`/api/comments/post/${id}`)
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
      .post("/api/comments", commentInfos)
      .then(() => {
        this.getCommentsForSinglePost(this.props.match.params.id);
        document.getElementById("myComment").value = "";
      })
      .catch(err => {});
  };

  displaySinglePost = id => {
    let { singlePost } = this.state;
    return (
      <>
        <div className="post_img_div">
          <img src={singlePost.post_url} alt="" className="post_img" />
        </div>
        <div className="post_title_div">
          <h1 className="post_title">{singlePost.title}</h1>
        </div>
        <div className="post_username_div">
          <Link to={`/user/${singlePost.user_id}`} className="post_username">
            By: {singlePost.username}
          </Link>
        </div>
        <div className="post_type_div">
          <p className="post_type">Tip for: {singlePost.pet_type}s</p>
        </div>
        <div className="post_body_div">
          <p className="post_body">{singlePost.post_body}</p>
        </div>
      </>
    );
  };

  displayCommentForm = () => {
    return (
      <form className="post_form" onSubmit={this.addComment}>
        <textarea
          id="myComment"
          type="text"
          placeholder="Share your thoughts..."
          className="post_form_text"
        />
        <button type="submit" className="post_form_button">
          Post Comment
        </button>
      </form>
    );
  };

  displayComments = () => {
    let comments = this.state.singlePostComments;
    return comments.map((comment, i) => {
      return (
        <div key={i + 1} className="post_single_comment">
          <Link
            to={`/user/${comment.user_id}`}
            className="post_comment_username"
          >
            {comment.username}
          </Link>
            <Moment className="post_timestamp" fromNow>{comment.time_added}</Moment>

          <p className="post_comment_body">{comment.comment_body}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="post_container">
        <div className="post_info">{this.displaySinglePost()}</div>
        <div className="post_form_div">{this.displayCommentForm()}</div>
        <div className="post_comments_container">
          <div className="post_comments_section">Comments:</div>
          {this.displayComments(this.props.match.params.id)}
        </div>
      </div>
    );
  }
}
export default SinglePost;
