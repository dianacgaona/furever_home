import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";

class Login extends Component {
  constructor() {
    super();
    debugger;

    this.state = {
      emailInput: "",
      passwordInput: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e, contextConfirm) => {
    e.preventDefault();
    axios
      .post("/users/login", {
        email: this.state.emailInput,
        password: this.state.passwordInput
      })
      .then(res => {
        contextConfirm(this.state.emailInput);
        this.setState({
          emailInput: "",
          passwordInput: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <h3>Login</h3>
              <form
                onSubmit={e => {
                  this.handleSubmit(e, context.functions.loginUser);
                }}
              >
                <input
                  type="text"
                  name="emailInput"
                  value={this.state.emailInput}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
                <input
                  type="password"
                  name="passwordInput"
                  value={this.state.passwordInput}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
                <button>Log in</button>
              </form>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Login;
