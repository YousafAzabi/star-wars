import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

import 'bootstrap/dist/css/bootstrap.css';

import config from '../config';

const styles = theme => ({
  card: {
    margin: '5%',
    float: 'left',
    width: '40%',
    textAlign: 'left',
    border: 'groove 1px',
    borderRadius: 10
  },
  badge: {
    float: 'right',
    right: '80px'
  },
});

class Player extends React.Component {

  render() {
    const { classes, isDisplayed, title, type, details, winningAttribute } = this.props;
    const attributes = config.ATTRIBUTES[type];

    return (
      <div className={classes.card}>
        <div className="card-body">
          <h5 className="card-title" style={{textAlign: 'center'}}>
            {title}
            <span className="badge badge-secondary">{winningAttribute}</span>
          </h5>
          {details !== null &&
            <List className={classes.details}>
            { attributes.map(attribute =>
              <ListItem key={attribute}>
                <b>{attribute}</b>: {isDisplayed && details[attribute]}
              </ListItem>
            )}
            </List>
          }
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Player);
