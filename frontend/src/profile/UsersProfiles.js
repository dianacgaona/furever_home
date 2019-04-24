import React, { Component } from 'react';
import axios from 'axios';

class UsersProfile extends Component {
  constructor() {
    super();
    this.state = {
      singleUser: [],
    };
  }

  componentDidMount() {
    this.getSingleUser(this.props.match.params.id);
  }

  getSingleUser = () => {
      axios.get(`/users/${this.props.match.params.user_id}`)
      .then(res => {
        debugger;
        this.setState({ singleUser: res.data });
      }).catch(err => {
        console.log('SINGLE USER ERRR', err);
      });
    };

  render() {
    return (
      <div>
      <h2>Xavier JM</h2>
      </div>
    );
  }
}

export default UsersProfile;
