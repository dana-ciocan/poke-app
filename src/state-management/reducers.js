import { ActionTypes } from './actions.js';
import { combineReducers } from 'redux';

export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case ActionTypes.ITEMS_HAS_ERRORED:
      return action.payload.hasErrored;

    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case ActionTypes.ITEMS_IS_LOADING:
      return action.payload.isLoading;

    default:
      return state;
  }
}

export function items(state = null, action) {
  switch (action.type) {
    case ActionTypes.ITEMS_FETCH_DATA_SUCCESS:
      return action.payload.items;

    default:
      return state;
  }
}

function selectedBrand(state = null, action) {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_BRAND:
      return action.payload.selectedBrand;
    default:
      return state;
  }
}

function selectedRank(state = null, action) {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_RANK:
      return action.payload.selectedRowNumber;
    default:
      return state;
  }
}

function condition(state = null, action) {
  switch (action.type) {
    case ActionTypes.SET_CONDITION_TYPE:
      return action.payload.condition;
    default:
      return state;
  }
}

function brands(state = [], action) {
  switch (action.type) {
    case ActionTypes.STORE_BRANDS:
      return action.payload.brands;
    default:
      return state;
  }
}

function brandOrderList(state = [], action) {
  switch (action.type) {
    case ActionTypes.STORE_BRANDS:
      return action.payload.brands.map(brand => brand.name);
    default:
      return state;
  }
}

const pokeApp = combineReducers({
  itemsHasErrored,
  itemsIsLoading,
  items,
  selectedBrand,
  selectedRank,
  condition,
  brands,
  brandOrderList,
});

export default pokeApp;
