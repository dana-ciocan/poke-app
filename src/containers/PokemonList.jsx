import { connect } from 'react-redux';
import PokemonTile from '../components/PokemonTile';
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

const PokemonList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonTile);

export default PokemonList;
