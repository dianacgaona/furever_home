import React, { Component } from 'react';
import axios from 'axios';
import { MyContext } from '../provider/MyProvider';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      passwordInput: '',
      emailInput: '',
      usernameInput: '',
    };
  }

  handleChange = e => {
    [e.target.name] = e.target.value;
  };

  handleSubmit = (e, contextConfirm) => {
    e.preventDefault();
    axios
      .post('/users/new', {
        email: this.state.emailInput,
        password: this.state.passwordInput,
        username: this.state.usernameInput,
      })
      .then(res => {
        contextConfirm(res.data.users);
        this.setState({
          emailInput: '',
          passwordInput: '',
          usernameInput: '',
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
              <h3>Register</h3>
              <form
                onSubmit={e => {
                  this.handleSubmit(e, context.functions.loginUser);
                }}
              >
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="emailInput"
                  value={this.state.emailInput}
                  placeholder="email"
                />
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="passwordInput"
                  value={this.state.passwordInput}
                  placeholder="password"
                />
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="usernameInput"
                  value={this.state.usernameInput}
                  placeholder="username"
                />
                <button>Register</button>
              </form>
              <div>
                <Link to={'/Login'}>Already a member? Log in</Link>
              </div>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Register;
