import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../css/care.css";

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
      .get('/api/posts/dogs')
      .then(res => {
        console.log(res);
        this.setState({
          dogPost: res.data.post
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
        <div className="postGod">
          <div className="fakePaper">
            <div className="postDiv">
              <div className="linkImg">
                <Link to={`/posts/${post.id}`}>
                  <img src={post.post_url} alt="" className="postImage" />
                </Link>
              </div>
              <div className="postInfo">
                <div>
                  <Link to={`/posts/${post.id}`}>
                    <p className="postTitle">{post.title}</p>
                  </Link>
                </div>
                <div>
                  <p className="petType">Tip for: {post.pet_type}s</p>
                </div>
                <div>
                  <p className="postBody">
                    {post.post_body.slice(0, 45) + "... "}
                    <Link to={`/posts/${post.id}`} className="post_link">
                      (read more)
                    </Link>
                  </p>
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
      <div className="fakePageBorder">
        <h1 className="careAdvice">Dog Care Advice </h1>
        <div className="wholePost">{this.displayDogPosts()}</div>
      </div>
    );
  }
}

export default DogCare;
