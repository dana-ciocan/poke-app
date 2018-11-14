// Action types

export const ActionTypes = {
  ALL_POKEMON_HAS_ERRORED: 'ALL_POKEMON_HAS_ERRORED',
  ALL_POKEMON_IS_LOADING: 'ALL_POKEMON_IS_LOADING',
  ALL_POKEMON_FETCH_DATA_SUCCESS: 'ALL_POKEMON_FETCH_DATA_SUCCESS',
  POKEMON_DETAILS_HAS_ERRORED: 'POKEMON_DETAILS_HAS_ERRORED',
  POKEMON_DETAILS_IS_LOADING: 'POKEMON_DETAILS_IS_LOADING',
  POKEMON_DETAILS_FETCH_DATA_SUCCESS: 'POKEMON_DETAILS_FETCH_DATA_SUCCESS',
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
  return (dispatch) => {
    dispatch(allPokemonIsLoading(true));
    fetch('http://pokeapi.salestock.net/api/v2/pokemon/')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(allPokemon => dispatch(fetchAllPokemonDataSuccess(allPokemon)))
      .then((allPokemon) => {
        dispatch(allPokemonIsLoading(false));
        return allPokemon;
      })
      .catch((err) => {
        console.log(`There appears to be a problem: ${err}`);
        dispatch(allPokemonHasErrored(true));
      });
  };
}

export function pokemonDetailsHasErrored(bool) {
  return {
    type: ActionTypes.POKEMON_DETAILS_HAS_ERRORED,
    payload: { hasErrored: bool },
  };
}

export function pokemonDetailsIsLoading(bool) {
  return {
    type: ActionTypes.POKEMON_DETAILS_IS_LOADING,
    payload: { isLoading: bool },
  };
}

export function fetchPokemonDetailsDataSuccess(allPokemon) {
  return {
    type: ActionTypes.POKEMON_DETAILS_FETCH_DATA_SUCCESS,
    payload: { allPokemon },
  };
}

export function fetchPokemonDetailsData(pokemon) {
  return (dispatch) => {
    dispatch(pokemonDetailsIsLoading(true));
    fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(pokemonDetails => dispatch(fetchPokemonDetailsDataSuccess(pokemonDetails)))
      .then((pokemonDetails) => {
        dispatch(pokemonDetailsIsLoading(false));
        return pokemonDetails;
      })
      .catch((err) => {
        console.log(`There appears to be a problem: ${err}`);
        dispatch(pokemonDetailsHasErrored(true));
      });
  };
}
