import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import players from './dummyData';
import DashBoardComponent from './dashboard/DashBoardComponent';
import DisplayComponent from './display/Display';

const methods = ['foul', 'strike', 'ball', 'hit']
class App extends Component {
  state = {
    players: players,
    selectedPlayerId: null, 
    currPlayer: {
      player_name: ''
    }
  }

  playerSelected = (id) => {
    const player = this.state.players.find(e => e.id === id)
    this.setState({
      ...this.state,
      selectedPlayerId: id,
      currPlayer: player
    })
    
  }

  handleClick = (evt, e) => {
    evt.preventDefault();
    switch (e) {
      case 'strike':
        if(this.state.currPlayer.strikes < 2) {
          this.setState({
        ...this.state,
        currPlayer: {
          ...this.state.currPlayer,
          strikes: ++this.state.currPlayer.strikes
        }
        })
        } else {
          this.setState({
        ...this.state,
        currPlayer: {
          ...this.state.currPlayer,
          strikes: 0
        }
        })
        }
        break;
      case 'ball':
         if(this.state.currPlayer.balls < 3) {
          this.setState({
        ...this.state,
        currPlayer: {
          ...this.state.currPlayer,
          balls: ++this.state.currPlayer.balls
        }
        })
        } else {
          this.setState({
        ...this.state,
        currPlayer: {
          ...this.state.currPlayer,
          balls: 0
        }
        })
        }
      case 'foul':
        if(this.state.currPlayer.strikes < 2) {
          this.setState({
        ...this.state,
        currPlayer: {
          ...this.state.currPlayer,
          strikes: ++this.state.currPlayer.strikes
        }
        })
        }
      default:
        break;
    }
  }

  render() {
    
    return (
     <div className="App">
         <DashBoardComponent currPlayer={this.state.currPlayer} handleClick={this.handleClick} methods={methods} playerSelected={this.playerSelected} players={this.state.players} />
         <DisplayComponent currPlayer={this.state.currPlayer} />
      </div>
    );
  }
}

export default App;
