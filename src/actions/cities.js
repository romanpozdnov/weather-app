import { createAction } from 'redux-starter-kit';

export const addCity = createAction('ADD_CITY');

export const deleteCity = createAction('DELETE_CITY');

export const updateCity = createAction('UPDATE_CITY');

export const updateAllCities = createAction('UPDATE_ALL_CITIES');
