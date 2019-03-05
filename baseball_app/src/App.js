import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import players from './dummyData';
import DashBoardComponent from './dashboard/DashBoardComponent';

const methods = ['foul', 'strike', 'ball', 'hit']
class App extends Component {
  state = {
    players: players,
    selectedPlayerId: null, 
    currPlayer: {}
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
    if(e === 'strike' && this.state.currPlayer.strikes < 2) {
      this.setState({
        ...this.state,
        currPlayer: {
          ...this.state.currPlayer,
          strikes: ++this.state.currPlayer.strikes
        }
      })
    }
  }

  render() {
    console.log(this.state.currPlayer)
    return (
     <div className="App">
         <DashBoardComponent handleClick={this.handleClick} methods={methods} playerSelected={this.playerSelected} players={this.state.players} />
      </div>
    );
  }
}

export default App;
