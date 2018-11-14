import { combineReducers } from 'redux';
import { ActionTypes } from './actions';

export function allPokemonHasErrored(state = false, action) {
  switch (action.type) {
    case ActionTypes.ALL_POKEMON_HAS_ERRORED:
      return action.payload.hasErrored;

    default:
      return state;
  }
}

export function allPokemonIsLoading(state = true, action) {
  switch (action.type) {
    case ActionTypes.ALL_POKEMON_IS_LOADING:
      return action.payload.isLoading;

    default:
      return state;
  }
}

export function allPokemon(state = null, action) {
  switch (action.type) {
    case ActionTypes.ALL_POKEMON_FETCH_DATA_SUCCESS:
      return action.payload.allPokemon;

    default:
      return state;
  }
}

export function pokemonDetailsHasErrored(state = false, action) {
  switch (action.type) {
    case ActionTypes.POKEMON_DETAILS_HAS_ERRORED:
      return action.payload.hasErrored;

    default:
      return state;
  }
}

export function pokemonDetailsIsLoading(state = false, action) {
  switch (action.type) {
    case ActionTypes.POKEMON_DETAILS_IS_LOADING:
      return action.payload.isLoading;

    default:
      return state;
  }
}

export function pokemonDetails(state = null, action) {
  switch (action.type) {
    case ActionTypes.POKEMON_DETAILS_FETCH_DATA_SUCCESS:
      return action.payload.allPokemon;

    default:
      return state;
  }
}

const pokeApp = combineReducers({
  allPokemonHasErrored,
  allPokemonIsLoading,
  allPokemon,
  pokemonDetailsHasErrored,
  pokemonDetailsIsLoading,
  pokemonDetails,
});

export default pokeApp;
