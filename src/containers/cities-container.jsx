import React, { useState, useCallback, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';

import SearchField from 'components/search-field';
import WeatherCard from 'components/weather-card';

import { weatherActions, cityActions } from 'actions';
import { selectAllCities } from 'selectors';

const CitiesContainer = () => {
  const dispatch = useDispatch();
  const cities = useSelector(selectAllCities);

  useEffect(() => {
    const cityIds = cities.map(({ id }) => id);

    if (cityIds.length) {
      dispatch(weatherActions.getCitiesWeatherRequest(cityIds));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [cityName, setCityName] = useState('');

  const handleChange = useCallback(event => {
    setCityName(event.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    dispatch(weatherActions.getCityWeatherRequest(cityName));
    setCityName('');
  }, [cityName, dispatch]);

  const handleUpdate = useCallback(
    cityName => {
      dispatch(weatherActions.getCityWeatherRequest(cityName));
    },
    [dispatch],
  );

  const handleDelete = useCallback(
    cityId => {
      dispatch(cityActions.deleteCity(cityId));
    },
    [dispatch],
  );

  return (
    <Row type="flex" justify="center">
      <Col xs={24} md={10}>
        <SearchField
          value={cityName}
          placeholder="Enter city"
          enterButton="Search"
          onSearch={handleSearch}
          onChange={handleChange}
        />
        {cities.map(city => (
          <WeatherCard
            city={city}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            key={city.id}
          />
        ))}
      </Col>
    </Row>
  );
};

export default memo(CitiesContainer);
