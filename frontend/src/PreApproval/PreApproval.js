import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class PreApproval extends React.Component {
  state = {
    name: '',
    phone: '',
    email: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />

          <TextField
          id="dob"
          label="DOB"
          className={classes.textField}
          margin="normal"
        />

          <TextField
          id="address"
          label="Address"
          className={classes.textField}
          margin="normal"
        />

          <TextField
          id="apt"
          label="Apt"
          className={classes.textField}
          margin="normal"
        />

          <TextField
          id="city"
          label="City"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="state"
          label="State"
          className={classes.textField}
          margin="normal"
        />

          <TextField
          id="zip"
          label="Zip"
          className={classes.textField}
          margin="normal"
        />

          <TextField
          id="phone"
          label="Phone"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="email"
          label="Email"
          className={classes.textField}
          margin="normal"
        />

      </form>
    );
  }
}

PreApproval.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PreApproval);
