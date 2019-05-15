import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

import '../css/approval.css';
import '../css/household.css';

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
        <FormGroup>
          <div className='Home'>What best describes your home</div>
            <div className='desHome'>
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
        </div>
        </FormGroup>


        <FormGroup row>
          <div className='yard'>Do you have a yard?</div>
            <div className='yardChoices'>
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
          </div>
        </FormGroup>

        <FormGroup row>
          <div className='windows'>Do you have a screen on your windows?</div>
          <div className='windowsChoices'>
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
        </div>
        </FormGroup>

        <FormGroup row>
          <div className='allergic'>Are you or anyone in your home allergic to animals?</div>
          <div className='allergicChoices'>
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
        </div>
        </FormGroup>

        <div className='animalNom'>Please list the animals(and their age) in your household if any</div>
          <div className='animalFill'>
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
            </div>


        <FormGroup row>
          <div className='spayed'>Are all animals neutered/spayed?</div>
          <div className='spayedChoices'>
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
        </div>
        </FormGroup>
      </div>
    );
  }
}

Household.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Household);
