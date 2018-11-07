import React from 'react';
import Spinner from './Spinner';
import sprites from './../assets/sprites.png';
import './Pokemon.css';
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
              <div className="sprite" style={pokeSprite} />
              <div className="name">{this.formatName(curPoke.name)}</div>
            </div>
          );
        })}
      </div>
    );
  }
  render() {
    const { pokemon } = this.props;
    return <>{pokemon ? this.generatePokeList(pokemon) : <Spinner />}</>;
  }
}

export default Pokemon;
