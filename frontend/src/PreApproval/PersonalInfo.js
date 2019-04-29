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
  datePicker: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150,
  },
});

class PersonalInfo extends React.Component {
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

      <div>

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
                id="date"
                label="Birthday"
                type="date"
                defaultValue="0000-00-00"
                className={classes.datePicker}
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ marginTop: '2%' }}
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

      </div>
    );
  }
}

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalInfo);
