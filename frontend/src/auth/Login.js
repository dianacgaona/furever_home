import React, { Component } from "react";
import axios from "axios";
import { MyContext } from "../provider/MyProvider";
import { Link, Redirect } from "react-router-dom";
import Auth from "../utils/Auth.js";
import "../css/login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      emailInput: "",
      passwordInput: "",
      redirect: false
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
      .post('/api/users/login', {
        email: this.state.emailInput,
        password: this.state.passwordInput
      })
      .then(res => {
        contextConfirm(res.data);
        Auth.authenticateUser(res.data.email);
        this.setState({
          emailInput: "",
          passwordInput: "",
          redirect: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={"/"} />;
    }
  };

  demoLogin = contextConfirm => {
    axios
      .post('/api/users/login', {
        email: 'corey@fh.com',
        password: '123',
      })
      .then(res => {
        Auth.authenticateUser(res.data.email);
        contextConfirm(res.data);
        this.setState({
          emailInput: "",
          passwordInput: "",
          redirect: true
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
          if (context.state.currentUser.id) {
            return <Redirect to={"/"} />;
          } else {
            return (
              <div className="login_container">
                <h3 className="login_title">LOGIN</h3>
                <form
                  onSubmit={e => {
                    this.handleSubmit(e, context.functions.loginUser);
                  }}
                  className="login_form"
                >
                  <input
                    type="text"
                    name="emailInput"
                    value={this.state.emailInput}
                    onChange={this.handleChange}
                    placeholder="Email"
                    className="login_input"
                  />
                  <input
                    type="password"
                    name="passwordInput"
                    value={this.state.passwordInput}
                    onChange={this.handleChange}
                    placeholder="Password"
                    className="login_input"
                  />
                  <div className="login_button_div">
                    <button className="login_button">Login</button>
                    <button
                      onClick={() =>
                        this.demoLogin(context.functions.loginUser)
                      }
                      className="login_button"
                    >
                      Demo Login
                    </button>
                  </div>
                </form>
                {this.renderRedirect()}
                <div>
                  <Link to={"/register"} className="login_link">
                    Need to create an account? Register
                  </Link>
                </div>
              </div>
            );
          }
        }}
      </MyContext.Consumer>
    );
  }
}

export default Login;
