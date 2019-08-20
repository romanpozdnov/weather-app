import { createSelector } from 'reselect';

export const selectCityById = createSelector(
  state => state.cities,
  (_, id) => id,
  (cities, id) => cities.find(city => city.id === +id),
);

export const selectAllCities = createSelector(
  state => state.cities,
  cities => cities,
);
