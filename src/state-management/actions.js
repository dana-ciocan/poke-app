// Action types

export const ActionTypes = {
  ITEMS_HAS_ERRORED: 'ITEMS_HAS_ERRORED',
  ITEMS_IS_LOADING: 'ITEMS_IS_LOADING',
  ITEMS_FETCH_DATA_SUCCESS: 'ITEMS_FETCH_DATA_SUCCESS',
};

// Action creators

export function itemsHasErrored(bool) {
  return {
    type: ActionTypes.ITEMS_HAS_ERRORED,
    payload: { hasErrored: bool },
  };
}

export function itemsIsLoading(bool) {
  return {
    type: ActionTypes.ITEMS_IS_LOADING,
    payload: { isLoading: bool },
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: ActionTypes.ITEMS_FETCH_DATA_SUCCESS,
    payload: { items },
  };
}

export function itemsFetchData() {
  return dispatch => {
    dispatch(itemsIsLoading(true));
    fetch('http://pokeapi.salestock.net/api/v2/pokemon/')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
