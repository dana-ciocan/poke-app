import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formatName } from '../utilities/formatting';
import Spinner from './Spinner';
import * as PrActions from '../state-management/actions';
import './PokemonDetails.css';

class PokemonDetails extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      fetchPokemonDetails,
    } = this.props;

    fetchPokemonDetails(id);
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (match.params.id === prevProps.match.params.id) {
      return;
    }

    const {
      match: {
        params: { id },
      },
      fetchPokemonDetails,
    } = this.props;

    fetchPokemonDetails(id);
  }

  render() {
    const { pokemon, isLoading } = this.props;

    return (
      <div className="pokemon-container">
        {isLoading || pokemon === null ? <Spinner /> : <div>{formatName(pokemon.name)}</div>}
      </div>
    );
  }
}

PokemonDetails.propTypes = {
  pokemon: PropTypes.shape(),
  fetchPokemonDetails: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  match: PropTypes.shape().isRequired,
};

PokemonDetails.defaultProps = {
  pokemon: null,
  isLoading: null,
};

const mapStateToProps = state => ({
  pokemon: state.pokemonDetails,
  hasErrored: state.pokemonDetailsHasErrored,
  isLoading: state.pokemonDetailsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemonDetails: id => dispatch(PrActions.fetchPokemonDetailsData(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonDetails);
