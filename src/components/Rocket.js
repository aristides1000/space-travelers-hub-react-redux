import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { reserveRocket } from '../redux/rockets/rockets';
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

  const dispatch = useDispatch();

  const reserveUpdate = () => {
    dispatch(reserveRocket({
      id,
    }));
    console.log(id);
  };

  return (
    <div className="rocket-container">
      <Card style={styles[0]}>
        <Card.Body style={{ flex: '0' }}>
          <img className="rocket-img" src={flickrImages} alt="planet" />
        </Card.Body>
        <Card.Body className="rocket-info">
          <Card.Title>{rocketName}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={reserveUpdate}>Reserve Rocket</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

Rocket.propTypes = {
  flickrImages: PropTypes.any,
  rocketName: PropTypes.any,
  description: PropTypes.any,
}.isRequired;

export default Rocket;
