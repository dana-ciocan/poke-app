import { connect } from 'react-redux';
import PokemonList from '../components/PokemonList';
import * as PrActions from '../state-management/actions';

const mapStateToProps = state => {
  return {
    pokemonList: state.allPokemon,
    hasErrored: state.allPokemonHasErrored,
    isLoading: state.allPokemonIsLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: condition => dispatch(PrActions.fetchAllPokemonData(condition)),
  };
};

const PokemonListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList);

export default PokemonListContainer;
