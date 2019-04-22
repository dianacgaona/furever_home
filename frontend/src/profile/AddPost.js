import React, { Component } from "react";
import axios from "axios";

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      inputTitleText: "",
      inputBodyText: "",
      inputPost_Url: "",
      pet_type: "cat",
      user_id: 1
    };
  }
  handleChange = e => {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`/posts/`, {
        user_id: 1,
        title: this.state.inputTitleText,
        post_body: this.state.inputBodyText,
        post_url: this.state.inputPost_Url,
        pet_type: "cat"
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  setPet_Type = () => {
    if (this.state.pet_type.checked === true){

  } else {

  }};
  render() {
    console.log(this.state.inputPost_Url);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputTitleText}
            onChange={this.handleChange}
            placeholder="Title"
            name="inputTitleText"
          />
          <input
            type="text"
            value={this.state.inputPost_Url}
            onChange={this.handleChange}
            placeholder="Image URL"
            name="inputPost_Url"
          />
          <input
            type="text"
            value={this.state.inputBodyText}
            onChange={this.handleChange}
            placeholder="Body"
            name="inputBodyText"
          />
          Dog
          <input type="checkbox" onclick="" id="dog" />
          Cat
          <input type="checkbox" onclick="" id="cat" />
          <input type="submit" value="Search" />
        </form>
      </>
    );
  }
}
export default AddPost;
