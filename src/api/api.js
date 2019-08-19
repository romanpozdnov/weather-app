import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.openweathermap.org',
  params: {
    appid: process.env.REACT_APP_APIKEY,
    units: 'metric',
  },
});
