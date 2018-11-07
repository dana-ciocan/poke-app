import React from 'react';
import Spinner from './Spinner';
import sprites from './../assets/sprites.png';
import './Pokemon.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Pokemon extends React.Component {
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
          return (
            <div className="pokemon" key={index}>
              <Link to={`/${curPoke.name}`} style={{ textDecoration: 'none' }}>
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
    console.log(pokemonList);
    return (
      <Router>
        <div className="page">
          {pokemonList ? this.generatePokeList(pokemonList) : <Spinner />}
          <Route path="/:id" component={Child} />
        </div>
      </Router>
    );
  }
}

function Child({ match }) {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}

export default Pokemon;
