import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';

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
    value: 0,
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
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="BREEDS" />
            <Tab label="COMMUNITY" />
          </Tabs>
        </AppBar>
        <div>
        {value === 0 && <TabContainer>DOGS</TabContainer>}
        {value === 0 && <TabContainer>CATS</TabContainer>}
        </div>
        <div>
        {value === 1 && <TabContainer>DOG CARE</TabContainer>}
        {value === 1 && <TabContainer>CAT CARE</TabContainer>}
        {value === 1 && <TabContainer>SHELETERS & RESCUES</TabContainer>}
        </div>
      </div>
    );
  }
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bar);
