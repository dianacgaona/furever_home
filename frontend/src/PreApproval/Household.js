import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

import '../css/approval.css';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  root: {
    color: '#001049',
    '&$checked': {
      color: '#001049',
    },
  },
  checked: {},
});

class Household extends React.Component {
  state = {
    checkedA: false,
    checkedH: false,
    yes: false,
    no: false,
    yes2: false,
    no2: false,
    yes3: false,
    no3: false,
    yes4: false,
    no4: false,
  };

  handleChecked = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (

      <div className='padding'>
        <FormGroup row>
          <p>What best describes your home</p>
          <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChecked('checkedA')}
              value="checkedA"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="Apartment"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedH}
              onChange={this.handleChecked('checkedH')}
              value="checkedH"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="House"
        />
        </FormGroup>

        <FormGroup row>
          <p>Do you have a yard?</p>
          <FormControlLabel
          control={
            <Checkbox
              checked={this.state.yes}
              onChange={this.handleChecked('yes')}
              value="yes"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="Yes"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.no}
              onChange={this.handleChecked('no')}
              value="no"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="No"
        />
        </FormGroup>

        <FormGroup row>
          <p>Do you have a screen on your windows?</p>
          <FormControlLabel
          control={
            <Checkbox
              checked={this.state.yes2}
              onChange={this.handleChecked('yes2')}
              value="yes2"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="Yes"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.no2}
              onChange={this.handleChecked('no2')}
              value="no2"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="No"
        />
        </FormGroup>

        <FormGroup row>
          <p>Are you or anyone in your home allergic to animals?</p>
          <FormControlLabel
          control={
            <Checkbox
              checked={this.state.yes3}
              onChange={this.handleChecked('yes3')}
              value="yes3"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="Yes"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.no3}
              onChange={this.handleChecked('no3')}
              value="no3"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="No"
        />
        </FormGroup>

        <p>Please list the animals(and their age) in your household if any</p>
        <TextField
          style={{ margin: 5 }}
          placeholder="(Ex. Cat: age 5years)"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.textField}
        />
        <TextField
          style={{ margin: 5 }}
          placeholder="(Ex. Dog: age 3years)"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.textField}
        />
        <TextField
          style={{ margin: 5 }}
          placeholder="(Ex. Kitten: age 4months)"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.textField}
        />
        <TextField
          style={{ margin: 5 }}
          placeholder="(Ex. Puppy: age 2months)"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.textField}
        />


      <FormGroup row>
        <p>Are all animals neutered/spayed?</p>
        <FormControlLabel
        control={
          <Checkbox
            checked={this.state.yes4}
            onChange={this.handleChecked('yes4')}
            value="yes4"
            classes={{
              root: classes.root,
              checked: classes.checked,
            }}
          />
        }
        label="Yes"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={this.state.no4}
            onChange={this.handleChecked('no4')}
            value="no4"
            classes={{
              root: classes.root,
              checked: classes.checked,
            }}
          />
        }
        label="No"
      />
      </FormGroup>
      </div>
    );
  }
}

Household.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Household);
