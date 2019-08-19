import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';

import { weatherAPI } from 'api';
import { weatherActions, cityActions } from 'actions';

function* getCityWeatherHandler(action) {
  try {
    const cities = yield select(state => state.cities);
    const city = yield call(weatherAPI.getWeatherByCityName, action.payload);

    yield put(weatherActions.getCityWeatherSuccess());

    if (cities.some(({ id }) => id === city.id)) {
      yield put(cityActions.updateCity(city));
    } else {
      yield put(cityActions.addCity(city));
    }
  } catch (err) {
    yield put(weatherActions.getCityWeatherFailure());
  }
}

function* getCitiesWeatherHandler(action) {
  try {
    const cities = yield call(weatherAPI.getWeatherByCityId, action.payload);

    yield put(weatherActions.getCitiesWeatherSuccess());
    yield put(cityActions.updateAllCities(cities));
  } catch (err) {
    yield put(weatherActions.getCitiesWeatherFailure());
  }
}

export default function* weatherSaga() {
  yield takeLatest(weatherActions.getCityWeatherRequest.type, getCityWeatherHandler);
  yield takeEvery(weatherActions.getCitiesWeatherRequest.type, getCitiesWeatherHandler);
}
