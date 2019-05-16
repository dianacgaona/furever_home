import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/care.css";

class CatCare extends Component {
  constructor() {
    super();

    this.state = {
      catPost: []
    };
  }

  componentDidMount() {
    this.getCatPosts();
  }

  getCatPosts = () => {
    axios
      .get('/api/posts/cats')
      .then(res => {
        console.log(res);
        this.setState({
          catPost: res.data.post
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
                    {post.post_body.slice(0, 50) + "..."}
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
        <h1 className="careAdvice">Cat Care Advice </h1>
        <div className="wholePost">{this.displayCatPosts()}</div>
      </div>
    );
  }
}

export default CatCare;
