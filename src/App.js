import React, { Component } from 'react';
import PokemonListContainer from './containers/PokemonListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pok&eacute;mon</h1>
        <PokemonListContainer />
      </div>
    );
  }
}

export default App;
