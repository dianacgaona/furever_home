import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';

import '../css/bar.css';
import '../css/navbar.css';
let logo = require('../assets/logo.png');

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Bar extends React.Component {
  state = {
    value: 2,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}  className='navbar'>

          <div className='logoContainer'>
            <NavLink to={'/'} className="logoLink">
              <img src={logo} alt="" className="logo"/>
            </NavLink>
          </div>

          <div className='fureverHome'>
           furever home
          </div>

            <Tab label="BREEDS" style={{ color: '#001049' }} className='iLinks'/>
            <Tab label="COMMUNITY" style={{ color: '#001049' }} className='iLinks'/>
          </Tabs>
        </AppBar>
        <div className='navlinks'>
        {value === 2 && <TabContainer>DOGS</TabContainer>}
        {value === 2 && <TabContainer>CATS</TabContainer>}
        </div>
        <div className='navlinks'>
        {value === 3 && <TabContainer>DOG CARE</TabContainer>}
        {value === 3 && <TabContainer>CAT CARE</TabContainer>}
        {value === 3 && <TabContainer>SHELETERS & RESCUES</TabContainer>}
        </div>
      </div>
    );
  }
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bar);
