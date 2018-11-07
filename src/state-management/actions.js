// Action types

export const ActionTypes = {
  ALL_POKEMON_HAS_ERRORED: 'ALL_POKEMON_HAS_ERRORED',
  ALL_POKEMON_IS_LOADING: 'ALL_POKEMON_IS_LOADING',
  ALL_POKEMON_FETCH_DATA_SUCCESS: 'ALL_POKEMON_FETCH_DATA_SUCCESS',
};

// Action creators

export function allPokemonHasErrored(bool) {
  return {
    type: ActionTypes.ALL_POKEMON_HAS_ERRORED,
    payload: { hasErrored: bool },
  };
}

export function allPokemonIsLoading(bool) {
  return {
    type: ActionTypes.ALL_POKEMON_IS_LOADING,
    payload: { isLoading: bool },
  };
}

export function fetchAllPokemonDataSuccess(allPokemon) {
  return {
    type: ActionTypes.ALL_POKEMON_FETCH_DATA_SUCCESS,
    payload: { allPokemon },
  };
}

export function fetchAllPokemonData() {
  return dispatch => {
    dispatch(allPokemonIsLoading(true));
    fetch('http://pokeapi.salestock.net/api/v2/pokemon/')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(allPokemonIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(allPokemon => dispatch(fetchAllPokemonDataSuccess(allPokemon)))
      .catch(() => dispatch(allPokemonHasErrored(true)));
  };
}
