import React from 'react';
import PropTypes from 'prop-types';
import { formatName } from '../utilities/formatting';
import Spinner from './Spinner';

class Pokemon extends React.Component {
  componentDidMount() {
    const { pokemon, fetchPokemonDetails } = this.props;
    fetchPokemonDetails(pokemon);
  }

  render() {
    const { pokemon } = this.props;
    return <>{pokemon ? <div>{formatName(pokemon.name)}</div> : <Spinner />}</>;
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape().isRequired,
  fetchPokemonDetails: PropTypes.func.isRequired,
};

export default Pokemon;
