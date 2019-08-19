import { createAction } from 'redux-starter-kit';

export const getCityWeatherRequest = createAction('GET_CITY_WEATHER_REQUEST');
export const getCityWeatherSuccess = createAction('GET_CITY_WEATHER_SUCCESS');
export const getCityWeatherFailure = createAction('GET_CITY_WEATHER_FAILURE');

export const getCitiesWeatherRequest = createAction('GET_CITIES_WEATHER_REQUEST');
export const getCitiesWeatherSuccess = createAction('GET_CITIES_WEATHER_SUCCESS');
export const getCitiesWeatherFailure = createAction('GET_CITIES_WEATHER_FAILURE');
