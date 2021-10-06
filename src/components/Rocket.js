import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import planet from '../media/planet.png';
import '../css/rocket.css';

const styles = [
  {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '1.5rem',
    alignItems: 'center',
    padding: '1rem 1rem',
    border: '0',
  },
];

const Rocket = () => (
  <div className="rocket-container">
    <Card style={styles[0]}>
      <Card.Body>
        <img className="rocket-img" src={planet} alt="planet" />
      </Card.Body>
      <Card.Body className="rocket-info">
        <Card.Title>Falcon 1</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam dignissim ex vitae turpis luctus venenatis.
          Aenean in lectus ut elit commodo lobortis quis nec nunc.
          In quis ex augue. Cras rutrum,
          dui condimentum gravida porta,
        </Card.Text>
        <Button variant="primary">Reserve Rocket</Button>
      </Card.Body>
    </Card>
  </div>
);

export default Rocket;

Rocket.propTypes = {
  flickrImages: PropTypes.any,
  rocketName: PropTypes.any,
  description: PropTypes.any,
}.isRequired;
