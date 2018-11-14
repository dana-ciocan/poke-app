import React from 'react';
import PokemonList from './components/PokemonList';
import './App.css';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header />
    <PokemonList />
  </div>
);

export default App;
