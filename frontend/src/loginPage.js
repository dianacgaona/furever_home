import React, { Component } from 'react';
import axios from 'axios';

class loginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      userLogged: {},
    };
  }

  handleSubmit = e => {
    let user = this.state;
    e.preventDefault();
    axios
      .post('/users/login', user)
      .then(res => {
        this.setState({
          userLogged: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    [e.target.name] = e.target.value;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleChange}>
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            value={this.state.email}
            placeholder="email"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="password"
            value={this.state.password}
            placeholder="password"
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default loginPage;
