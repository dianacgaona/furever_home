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

      user_Posts:[]
    };
  }
  handleChange = e => {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

componentDidMount(){
  this.getPosts()
}
getPosts = async() => {

  await
  axios
    .get(`/posts/byUser/2`)
    .then(res => {
      this.setState({
        user_Posts: res.data.post
      });
      // console.log(res);
    })
    .catch(err => {
      // console.log(err);
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
        pet_type: this.state.pet_type
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
       this.setState({
         inputTitleText: "",
         inputBodyText: "",
         inputPost_Url: "",
         pet_type: ""
       })
     })

  };
  handleChange = event => {
    let { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
    // console.log("checked");
  };

  render() {
    // console.log(this.state.inputPost_Url);
    return (

      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <form onSubmit={(e) => {

                this.handleSubmit(e, context.state.currentUser.id)
              }} id='post_form'>
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
                name='pet_type'
                value='Dog'
                checked={this.state.pet_type === "Dog"}
                onChange={this.handleChange}
                />
                Cat
                <input
                type="radio"
                name='pet_type'
                value='Cat'
                checked={this.state.pet_type === "Cat"}
                onChange={this.handleChange}
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
