import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";
import PostModal from "./AddPostModal.js";
import { withRouter } from "react-router-dom";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitleText: "",
      inputBodyText: "",
      inputPost_Url: "",
      pet_type: "",
      user_Posts: this.props.user_Posts
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e, user) => {
    debugger;
    e.preventDefault();
    axios
      .post(`/api/posts/`, {
        user_id: user,
        title: this.state.inputTitleText,
        post_body: this.state.inputBodyText,
        post_url: this.state.inputPost_Url,
        pet_type: this.state.pet_type
      })
      .then(res => {
        this.setState({
          inputTitleText: "",
          inputBodyText: "",
          inputPost_Url: "",
          pet_type: ""
        });
      })
      .then(res => {
        this.props.getPosts();
      });
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <PostModal
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                inputTitleText={this.state.inputTitleText}
                inputBodyText={this.state.inputBodyText}
                inputPost_Url={this.state.inputPost_Url}
                pet_type={this.state.pet_type}
                user_Posts={this.state.user_Posts}
              />
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
export default withRouter(AddPost);
