import React, { memo } from 'react';
import { Descriptions } from 'antd';
import styles from 'styles/styles.module.css';

const WeatherDetails = ({ city }) => {
  return (
    city && (
      <Descriptions
        bordered
        title={`Detailed current weather information in ${city.name}`}
        className={styles.description}
      >
        <Descriptions.Item label="Sky" span={3}>
          {city.weather[0].description}
        </Descriptions.Item>
        <Descriptions.Item label="Temperature" span={3}>
          {`${city.main.temp} °C`}
        </Descriptions.Item>
        <Descriptions.Item label="Min temperature" span={3}>
          {`${city.main.temp_min} °C`}
        </Descriptions.Item>
        <Descriptions.Item label="Max temperature" span={3}>
          {`${city.main.temp_max} °C`}
        </Descriptions.Item>
        <Descriptions.Item label="Wind speed">{`${city.wind.speed} m/s`}</Descriptions.Item>
      </Descriptions>
    )
  );
};

export default memo(WeatherDetails);
