import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';

import WeatherDetails from 'components/weather-details';
import { selectCityById } from 'selectors';

const WeatherContainer = ({ match: { params } }) => {
  const city = useSelector(state => selectCityById(state, params.id));

  return (
    <Row type="flex" justify="center">
      <Col xs={24} md={10}>
        <WeatherDetails city={city} />
      </Col>
    </Row>
  );
};

export default memo(WeatherContainer);
