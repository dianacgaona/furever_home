import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../css/approval.css';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  textField2: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 100,
  },
});

class PreApproval extends React.Component {
  state = {
    name: '',
    phone: '',
    email: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (

      <div className='padding'>
        <form className='formBorder' noValidate autoComplete="off">
          <div className='namedob'>
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
              className={classes.textField2}
              margin="normal"
            />
          </div>
          <div className='address1'>
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
          </div>
          <div className='address2'>
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
          </div>
          <div className='phoneEmail'>
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
          </div>

          <div>
            <button className='preButton'>Submit</button>
          </div>

        </form>
      </div>
    );
  }
}

PreApproval.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PreApproval);
