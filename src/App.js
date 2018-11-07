import React, { Component } from 'react';
import PokemonList from './containers/PokemonList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pok&eacute;mon</h1>
        <PokemonList />
      </div>
    );
  }
}

export default App;
