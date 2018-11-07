import { ActionTypes } from './actions.js';
import { combineReducers } from 'redux';

export function allPokemonHasErrored(state = false, action) {
  switch (action.type) {
    case ActionTypes.ALL_POKEMON_HAS_ERRORED:
      return action.payload.hasErrored;

    default:
      return state;
  }
}

export function allPokemonIsLoading(state = false, action) {
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

const pokeApp = combineReducers({
  allPokemonHasErrored,
  allPokemonIsLoading,
  allPokemon,
});

export default pokeApp;
