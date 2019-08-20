import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import styles from 'styles/styles.module.css';

const WeatherCard = ({ city, onUpdate, onDelete }) => {
  return (
    <Card
      title={`Weather in ${city.name}`}
      extra={<Link to={`/cities/${city.id}`}>Detailes</Link>}
      className={styles.cart}
    >
      <Row>
        <Col>
          <Row type="flex" align="middle">
            <Col>
              <img
                src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                alt={city.weather[0].description}
                className={styles.img}
              />
            </Col>
            <Col>
              <span className={styles.cartSpan}>{city.main.temp.toFixed(1)} °C</span>
              <div>{city.weather[0].description}</div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} align="end">
          <Button type="primary" size="small" onClick={() => onUpdate(city.name)}>
            Update
          </Button>
          <Button
            type="danger"
            size="small"
            onClick={() => onDelete(city.id)}
            className={styles.cartButton}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default memo(WeatherCard);
