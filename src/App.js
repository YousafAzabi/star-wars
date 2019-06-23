import React from 'react';
<<<<<<< HEAD

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
      winningAttribute: '',
      isNewdisabled: false,
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
    let winner = func.getWinner(this.state.playerOne, this.state.playerTwo, this.state.winningAttribute);
    let playerOneWins = this.state.playerOneWins;
    let playerTwoWins = this.state.playerTwoWins;
    if (winner === 'Player One Wins') {
      playerOneWins++;
    } else if(winner === 'Player Two Wins') {
      playerTwoWins++;
    } else {
      winner = ('The result is draw.');
    }
    this.setState({
      playerOneWins,
      playerTwoWins,
      isPlayerTwoDisabled: true,
      isNewdisabled: false,
      isPlayDisabled: true
     });
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> Initial commit from Create React App
