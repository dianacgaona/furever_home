import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/navbar.css';

let logo = require('./assets/logo.png');

class Navbar extends Component {
  render() {
    return (
      <nav className='Navbar'>

        <div className='navlinks'>

          <div className='logoContainer'>
            <NavLink to={'/'} className="logoLink">
              <img src={logo} alt="" className="logo"/>
            </NavLink>
          </div>

          <div className='fureverHome'>
           furever home
          </div>


          <NavLink to={'/breeds'} className='ddlinks'>
              BREEDS
          </NavLink>

          <NavLink to={'/resources'} className='ddlinks'>
              RESOURCES
          </NavLink>


        </div>

      </nav>
    );
  }
}

export default Navbar;
