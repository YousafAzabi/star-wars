import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

import config from '../config';

const styles = theme => ({
  card: {
    margin: '5%',
    float: 'left',
    width: '40%',
    textAlign: 'left'
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
      <Card className={classes.card}>
        <CardContent>
          { winningAttribute &&
            <Badge color='primary' badgeContent={winningAttribute} className={classes.badge}>
              {' '}
            </Badge>
          }
          <Typography className={classes.title}>{title}</Typography>
          {details !== null &&
            <List className={classes.details}>
            { attributes.map(attribute =>
              <ListItem key={attribute}>
                <b>{attribute}</b>: {isDisplayed && details[attribute]}
              </ListItem>
            )}
            </List>
          }
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Player);
