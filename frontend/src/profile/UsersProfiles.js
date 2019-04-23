import React, { Component } from 'react';
import axios from 'axios';

class UsersProfile extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      usersPosts: [],
      usersAdopted: [],
      usersFavorites: [], };
  }
}

export default UsersProfile;
