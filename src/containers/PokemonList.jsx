import { connect } from 'react-redux';
import Pokemon from '../components/Pokemon';
import * as PrActions from '../state-management/actions';

const mapStateToProps = state => {
  return {
    pokemonList: state.allPokemon,
    hasErrored: state.hasErrored,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: condition => dispatch(PrActions.fetchAllPokemonData(condition)),
  };
};

const PokemonList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon);

export default PokemonList;
