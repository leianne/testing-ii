import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import players from './dummyData';
import DashboardView from './dashboard/DashBoardView';

class App extends Component {
  state = {
    players: players
  }
  render() {
    return (
      <div className="App">
        <DashboardView players={this.state.players}/>
      </div>
    );
  }
}

export default App;
