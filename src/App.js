import React, { Component } from 'react';

import GameRound from './components/GameRound.js'
import data from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameRound {...data}/>
      </div>
    );
  }
}

export default App;
