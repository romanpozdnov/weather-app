import { createReducer } from 'redux-starter-kit';

import { cityActions } from 'actions';

const initialState = [];

export default createReducer(initialState, {
  [cityActions.addCity]: (state, action) => {
    state.unshift(action.payload);
  },
  [cityActions.deleteCity]: (state, action) => {
    return state.filter(city => city.id !== action.payload);
  },
  [cityActions.updateCity]: (state, action) => {
    const cityIndex = state.findIndex(city => city.id === action.payload.id);
    state[cityIndex] = action.payload;
  },
  [cityActions.updateAllCities]: (state, action) => {
    state = action.payload;
  },
});
