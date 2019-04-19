import React, { Component } from 'react';
import axios from 'axios';
import { Paper } from '@material-ui/core';
import { MyContext } from '../provider/MyProvider';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      emailInput: '',
      passwordInput: '',
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
      .post('/users/login', {
        email: this.state.emailInput,
        password: this.state.passwordInput,
      })
      .then(res => {
        console.log(res);
        contextConfirm(res.data);
        this.setState({
          emailInput: '',
          passwordInput: '',
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  demoLogin = contextConfirm => {
    axios
      .post('/users/login', {
        email: 'user1@fh.com',
        password: '123',
      })
      .then(res => {
        contextConfirm(res.data);
        this.setState({
          emailInput: '',
          passwordInput: '',
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
          console.log(context, 'CONTEXT');
          return (
            <div>
              <Paper style={{ width: '15%', padding: '5%', fontFamily: 'Open Sans Condensed', display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '2%' }}>
              <p style={{ fontWeight: '900', marginLeft: '37%', fontSize: '25px' }}>LOGIN</p>
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
                  style={{ marginLeft: '18%' }}
                />
                <input
                  type="password"
                  name="passwordInput"
                  value={this.state.passwordInput}
                  onChange={this.handleChange}
                  placeholder="Password"
                  style={{ marginLeft: '18%' }}
                />
                <div className='loginContainer'>
                <button style={{ borderRadius: '1px', marginLeft: '20%', color: 'white', backgroundColor: '#001049' }}>Login</button>
                <button onClick={this.demoLogin} style={{ borderRadius: '1px', color: 'white', backgroundColor: '#001049' }}>Demo Login</button>
                </div>
              </form>
              <div>
                <Link to={'/register'}>
                  <p style={{ marginLeft: '7%' }}>Need to create an account? Register</p>
                </Link>
              </div>
              </Paper>
            </div>

          );
        }}

      </MyContext.Consumer>
    );
  }
}

export default Login;
