import React from 'react';
import Spinner from './Spinner';
import sprites from './../assets/sprites.png';
import './PokemonTile.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PokemonDetails from './../containers/PokemonDetails';
class PokemonTile extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  formatName(pokemonName) {
    return `${pokemonName.substring(0, 1).toUpperCase()}${pokemonName.substring(
      1
    )}`;
  }
  generatePokeList(pokemon) {
    return (
      <div className="poke-list">
        {pokemon.results.map((curPoke, index) => {
          let pokeXPos = -96 * index;
          let pokeSprite = {
            backgroundImage: `url(${sprites})`,
            backgroundPosition: `${pokeXPos}px 0`,
          };
          let pokeId = curPoke.url.split('/');
          pokeId = pokeId[pokeId.length - 2];
          console.log(pokeId);
          return (
            <div className="pokemon" key={index}>
              <Link to={`/${pokeId}`} style={{ textDecoration: 'none' }}>
                <div className="sprite" style={pokeSprite} />
                <div className="name">{this.formatName(curPoke.name)}</div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
  render() {
    const { pokemonList } = this.props;
    return (
      <Router>
        <div className="page">
          {pokemonList ? this.generatePokeList(pokemonList) : <Spinner />}
          <Route path="/:id" component={PokemonDetails} />
        </div>
      </Router>
    );
  }
}

export default PokemonTile;
