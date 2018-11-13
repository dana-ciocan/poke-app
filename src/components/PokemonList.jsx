import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import sprites from '../assets/sprites.png';
import './PokemonList.css';
import PokemonDetails from '../containers/PokemonDetails';
import { formatName } from '../utilities/formatting';

class PokemonList extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  generatePokeList(pokemon) {
    return (
      <div className="poke-list">
        {pokemon.results.map((curPoke, index) => {
          const pokeXPos = -96 * index;
          const pokeSprite = {
            backgroundImage: `url(${sprites})`,
            backgroundPosition: `${pokeXPos}px 0`,
          };
          let pokeId = curPoke.url.split('/');
          pokeId = pokeId[pokeId.length - 2];
          return (
            <div className="pokemon" key={pokeId}>
              <Link to={`/${pokeId}`} style={{ textDecoration: 'none' }}>
                <div className="sprite" style={pokeSprite} />
                <div className="name">{formatName(curPoke.name)}</div>
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

PokemonList.propTypes = {
  pokemonList: PropTypes.shape().isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default PokemonList;
