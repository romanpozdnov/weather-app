import React from 'react';
import { useSelector } from 'react-redux';

const DetailedInformation = ({ match: { params } }) => {
  const city = useSelector(state => state.cities.find(city => city.id === +params.id));

  return <div>{city && city.name}</div>;
};

export default DetailedInformation;
