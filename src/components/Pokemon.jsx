import React from 'react';
import Spinner from './Spinner';
class Pokemon extends React.Component {
  componentDidMount() {
    const { pokemon } = this.props;
    this.props.fetchPokemonDetails(pokemon);
  }
  formatName(pokemonName) {
    return `${pokemonName.substring(0, 1).toUpperCase()}${pokemonName.substring(
      1
    )}`;
  }
  render() {
    const { pokemon } = this.props;
    return <>{pokemon ? <div>{pokemon.name}</div> : <Spinner />}</>;
  }
}

export default Pokemon;
