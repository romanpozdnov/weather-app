import API from './api';

export const getWeatherByCityName = async cityName => {
  const { data } = await API.get(`/data/2.5/weather?q=${cityName}`);
  return data;
};

export const getWeatherByCityId = async cityIds => {
  const { data } = await API.get(`/data/2.5/group?id=${cityIds.join(',')}`);
  return data;
};
