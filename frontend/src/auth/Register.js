import React, { Component } from 'react';
import axios from 'axios';
import { MyContext } from '../provider/MyProvider';
import { Link, Redirect } from 'react-router-dom';
import Auth from '../utils/Auth.js';
import '../css/register.css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordInput: '',
      emailInput: '',
      usernameInput: '',
      redirect: false,
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e, contextConfirm) => {
    e.preventDefault();
    axios
      .post("/api/users/new", {
        email: this.state.emailInput,
        password_digest: this.state.passwordInput,
        username: this.state.usernameInput,
      })
      .then(res => {
        Auth.authenticateUser(res.data.email);
        contextConfirm(res.data);
      })
      .then(() => {
        axios
          .post("/api/users/login", {
            email: this.state.emailInput,
            password: this.state.passwordInput,
          })
          .then(res => {
            console.log('LOGIN SUCCESS?');
            contextConfirm(res.data);
            this.setState({
              emailInput: '',
              passwordInput: '',
              usernameInput: '',
              redirect: true,
            });
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={'/'} />;
    }
  };

  render() {
    return (



<MyContext.Consumer>
        {context => {
          if (context.state.currentUser.id) {
            return <Redirect to={'/'} />;
          } else {
            return (
              <div className="register_container">
                <h3 className="register_title">REGISTER</h3>
                <form
                  onSubmit={e => {
                    this.handleSubmit(e, context.functions.loginUser);
                  }}

                  className="register_form"
                >
                  <input
                    type="text"
                    name="emailInput"
                    value={this.state.emailInput}
                    onChange={this.handleChange}
                    placeholder="Email"
                    className="register_input"
                  />
                  <input
                    type="password"
                    name="passwordInput"
                    value={this.state.passwordInput}
                    onChange={this.handleChange}
                    placeholder="Password"
                    className="register_input"
                  />
                  <input
                    type="text"
                    name="usernameInput"
                    value={this.state.usernameInput}
                    onChange={this.handleChange}
                    placeholder="Username"
                    className="register_input"
                  />
                  <button className="register_button">Register</button>
                </form>
                {this.renderRedirect()}
                <div>
                  <Link to={'/login'} className="register_link">
                    Already a member? Log in
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

export default Register;
