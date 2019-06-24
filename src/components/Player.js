import React from 'react';

<<<<<<< HEAD
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

=======
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

import 'bootstrap/dist/css/bootstrap.css';

>>>>>>> used BootStrap
import config from '../config';

const styles = theme => ({
  card: {
    margin: '5%',
    float: 'left',
    width: '40%',
<<<<<<< HEAD
    textAlign: 'left'
=======
    textAlign: 'left',
    border: 'groove 1px',
    borderRadius: 10
>>>>>>> used BootStrap
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
<<<<<<< HEAD
      <Card className={classes.card}>
        <CardContent>
          { winningAttribute &&
            <Badge color='primary' badgeContent={winningAttribute} className={classes.badge}>
              {' '}
            </Badge>
          }
          <Typography className={classes.title}>{title}</Typography>
=======
      <div className={classes.card}>
        <div className="card-body">
          <h5 className="card-title" style={{textAlign: 'center'}}>
            {title}
            <span className="badge badge-secondary">{winningAttribute}</span>
          </h5>
>>>>>>> used BootStrap
          {details !== null &&
            <List className={classes.details}>
            { attributes.map(attribute =>
              <ListItem key={attribute}>
                <b>{attribute}</b>: {isDisplayed && details[attribute]}
              </ListItem>
            )}
            </List>
          }
<<<<<<< HEAD
        </CardContent>
      </Card>
=======
        </div>
      </div>
>>>>>>> used BootStrap
    );
  }
}

export default withStyles(styles)(Player);
