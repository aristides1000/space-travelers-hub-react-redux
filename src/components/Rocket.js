/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
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

const Rocket = (props) => {
  const { rocket } = props;

  const {
    id, rocketName, description, flickrImages,
  } = rocket;
  return (
    <div className="rocket-container" id={id}>
      <Card style={styles[0]}>
        <Card.Body>
          <img className="rocket-img" src={planet} alt="planet" />
        </Card.Body>
        <Card.Body className="rocket-info">
          <Card.Title>{rocketName}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Reserve Rocket</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  flickrImages: PropTypes.any,
  rocketName: PropTypes.any,
  description: PropTypes.any,
}.isRequired;
