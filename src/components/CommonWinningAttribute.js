import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

import config from '../config';

const styles = theme => ({
  formControl: {
    float: 'left',
    width: '34%',
    minWidth: 200,
    marginLeft: '8%',
    marginRight: '8%'
  },
});

class TypeSelect extends React.Component {

  render() {
    const { classes, type, winningAttribute, handleChange } = this.props;
    const attributes = config.ATTRIBUTES[type];

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Winning Attribute</InputLabel>
        <Select value={winningAttribute}
        onChange={handleChange}>
          { attributes && attributes.map(attribute =>
            <MenuItem key={attribute} value={attribute}>{attribute}</MenuItem>
          )}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(TypeSelect);
