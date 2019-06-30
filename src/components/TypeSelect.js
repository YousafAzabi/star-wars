import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

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
    const { classes, handleChange } = this.props;
    
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Collection</InputLabel>
        <Select value={this.props.type}
        onChange={handleChange}>
          <MenuItem value={'people'}>People</MenuItem>
          <MenuItem value={'starships'}>StarShips</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(TypeSelect);
