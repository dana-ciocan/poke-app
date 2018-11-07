import { connect } from 'react-redux';
import Pokemon from '../components/Pokemon';
import * as PrActions from '../state-management/actions';

const mapStateToProps = state => {
  return {
    pokemon: state.allPokemon,
    hasErrored: state.hasErrored,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemonDetails: pokemon =>
      dispatch(PrActions.fetchPokemonDetails(pokemon)),
  };
};

const PokemonDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon);

export default PokemonDetails;
