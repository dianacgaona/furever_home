import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import '../css/approval.css';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  textField2: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 100,
  },
});

class References extends React.Component {

  render() {
    const { classes } = this.props;
    return (

      <div className='padding'>
          <div className='Rname'>
            <p className='nom1' style={{ marginBottom: '-3%' }}>1.</p><TextField
            id="name"
            label="Name"
            className={classes.textField}
            margin="normal"
          />

            <TextField
            id="realtionship"
            label="Relationship"
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
            id="long"
            label="How long have you known this person?"
            className={classes.textField}
            margin="normal"
          />

            <p className='nom2' style={{ marginTop: '1%', marginBottom: '-3%' }}>2.</p><TextField
            id="name"
            label="Name"
            className={classes.textField}
            margin="normal"
          />

            <TextField
            id="realtionship"
            label="Relationship"
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
            id="long"
            label="How long have you known this person?"
            className={classes.textField}
            margin="normal"
          />
          </div>

      </div>
    );
  }
}

References.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(References);
