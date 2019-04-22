import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";
class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitleText: "",
      inputBodyText: "",
      inputPost_Url: "",
      pet_type: "",
      user_id: 1
    };
  }
  handleChange = e => {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e, user) => {
    e.preventDefault();
    console.log(user)
    axios
      .post(`/posts/`, {
        user_id: user,
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

  // setPet_Type = () => {
  //   if (this.state.pet_type.checked === true) {
  //   } else {
  //   }
  // };
  render() {
    // console.log(this.state.inputPost_Url);
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <form onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit(e, context.state.currentUser.id)
              }}>
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
                <input
                type="radio"
                checked={this.state.pet_type === "dog"}
                id="dog" />
                Cat
                <input
                type="radio"
                checked={this.state.pet_type === "cat"}
                 />
                <input type="submit" value="Add Post" />
              </form>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
export default AddPost;

// <div className="radios">
//        <p>Can you hold your breath under water longer than 1 minute?</p>
//        <div>
//          <span>
//            <input
//              type="radio"
//              name="breath"
//              value="yes"
//              checked={breath === "yes"}
//              onChange={this.handleChange}
//            />
//            Yes
//          </span>
//          <span>
//            <input
//              type="radio"
//              name="breath"
//              value="no"
//              checked={breath === "no"}
//              onChange={this.handleChange}
//            />
//            No
//          </span>
//        </div>
