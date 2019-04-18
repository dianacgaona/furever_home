import React, { Component } from 'react';
import Bar from './Bar';

import '../css/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <Bar />
      </nav>
    );
  }
}

export default Navbar;
