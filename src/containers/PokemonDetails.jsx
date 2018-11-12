import { connect } from 'react-redux';
import Pokemon from '../components/Pokemon';
import * as PrActions from '../state-management/actions';

const mapStateToProps = state => {
  return {
    pokemon: state.pokemonDetails,
    hasErrored: state.pokemonDetailsHasErrored,
    isLoading: state.pokemonDetailsIsLoading,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const { match } = props;
  return {
    fetchPokemonDetails: () =>
      dispatch(PrActions.fetchPokemonDetailsData(match.params.id)),
  };
};

const PokemonDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon);

export default PokemonDetails;
