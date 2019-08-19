import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { weatherActions, cityActions } from 'actions';

const Input = () => {
  const cities = useSelector(state => state.cities);
  const dispatch = useDispatch();

  const [cityName, setCityName] = useState('');

  useEffect(() => {
    const cityIds = cities.map(({ id }) => id);

    if (cityIds.length) {
      dispatch(weatherActions.getCitiesWeatherRequest(cityIds));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = event => {
    setCityName(event.target.value);
  };

  const handleOnKeyDown = event => {
    if (event.keyCode === 13) {
      dispatch(weatherActions.getCityWeatherRequest(cityName));
      setCityName('');
    }
  };

  const handleSearch = () => {
    dispatch(weatherActions.getCityWeatherRequest(cityName));
    setCityName('');
  };

  const handleUpdate = cityName => {
    dispatch(weatherActions.getCityWeatherRequest(cityName));
  };

  const handleDelete = cityId => {
    dispatch(cityActions.deleteCity(cityId));
  };

  return (
    <>
      <input
        type="text"
        value={cityName}
        onChange={handleInputChange}
        onKeyDown={handleOnKeyDown}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      {cities.map(city => {
        return (
          <div style={{ width: '100px', border: '1px solid #eee' }} key={city.id}>
            <div>{city.name}</div>
            <img
              src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt="qweqwe"
            />
            <div>{city.weather[0].description}</div>
            <div>{city.main.temp}</div>
            {/* <div>{city.main.temp_min}</div>
          <div>{city.main.temp_max}</div>
          <div>{city.wind.speed}</div>
          <div>{city.clouds.all}</div> */}
            <Link to={`/cities/${city.id}`}>Detailes</Link>
            <button onClick={() => handleUpdate(city.name)}>Update weather</button>
            <button onClick={() => handleDelete(city.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default Input;
