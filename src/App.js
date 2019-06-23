import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'

import TypeSelect from './components/TypeSelect';
import Player from './components/Player';
import CommonWinningAttribute from './components/CommonWinningAttribute';
import func from './func/index';

const styles = theme => ({
  button: {
    width: 80,
    height: 80,
    borderRadius: 100,
    margin: '80px 30px',
    color: 'white',
    background: 'orange'
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      collections: null,
      winningAttribute: '',
      playerOne: null,
      playerTwo: null,
      playerOneWins: 0,
      playerTwoWins: 0,
      isPlayerTwoDisabled: false,
      isNewdisabled: false,
      isPlayDisabled: true,
    };
  }

  handleTypeSelectChange = (event) => {
    this.setState({
      type: event.target.value,
      playerOne: null,
      playerTwo: null,
      winningAttribute: ''
    });
  }

  handleCommonAttributeSelectChange = (event) => {
    this.setState({ winningAttribute: event.target.value });
  }

  handleNewClick = () => {
    const collection = this.state.collections[this.state.type];
    const playerOne = func.getData(collection);
    const playerTwo = func.getData(collection);
    this.setState({
      playerOne,
      playerTwo,
      isPlayerTwoDisabled: false,
      isNewdisabled: true,
      isPlayDisabled: false,
    });
  }

  handlePlayClick = () => {
    const winner = func.getWinner(this.state.playerOne, this.state.playerTwo, this.state.winningAttribute);
    if (winner === 'Player One Wins') {
      const playerOneWins = this.state.playerOneWins + 1;
      this.setState({
        playerOneWins,
        isPlayerTwoDisabled: true,
        isNewdisabled: false,
        isPlayDisabled: true
      });
    } else if(winner === 'Player Two Wins') {
      const playerTwoWins = this.state.playerTwoWins + 1;
      this.setState({
        playerTwoWins,
        isPlayerTwoDisabled: true,
        isNewdisabled: false,
        isPlayDisabled: true
       });
    } else {
      this.setState({
        isPlayerTwoDisabled: true,
        isNewdisabled: false,
        isPlayDisabled: true
      });
      winner = ('The result is draw.');
    }
    alert(winner);
  }

  async componentDidMount() {
    const people = await func.fetchData('people');
    const starships = await func.fetchData('starships');
    const collections = { people, starships };
    this.setState({ collections });
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={{textAlign: 'center'}}>
        <div style={{marginTop: 20}}>
          <TypeSelect
            type={this.state.type}
            handleChange={this.handleTypeSelectChange}
          />

          <CommonWinningAttribute
            type={this.state.type}
            winningAttribute={this.state.winningAttribute}
            handleChange={this.handleCommonAttributeSelectChange}
          />
        </div>

        <div>
          <Player isDisplayed={true}
            title='Player One'
            type={this.state.type}
            details={this.state.playerOne}
            winningAttribute={this.state.winningAttribute}
          />
          <Player isDisplayed={this.state.isPlayerTwoDisabled}
            title='Player Two'
            type={this.state.type}
            details={this.state.playerTwo}
            winningAttribute={this.state.winningAttribute}
          />
        </div>
        <Typography>
          Winning Score: <b>{this.state.playerOneWins}</b> vs <b>{this.state.playerTwoWins}</b>
        </Typography>
        <div className={classes.buttonContainer}>
          <Button
            disabled={(this.state.type === '') || this.state.isNewdisabled}
            className={classes.button}
            onClick={this.handleNewClick}
          >
            NEW
          </Button>

          <Button
            disabled={(this.state.winningAttribute === '') || this.state.isPlayDisabled}
            className={classes.button}
            onClick={this.handlePlayClick}
          >
            PLAY
          </Button>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(App);
