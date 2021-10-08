/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { reserveRocket, cancelRocket } from '../redux/rockets/rockets';
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

const ReserveButton = (props) => {
  const { reserved, reserveRocket, cancelRocket } = props;

  if (reserved) {
    return <Button onClick={cancelRocket} variant="light">Cancel Reservation</Button>;
  }
  return <Button onClick={reserveRocket} variant="primary">Reserve Rocket</Button>;
};

const ReserveBadge = (props) => {
  const { reserved } = props;

  if (reserved) {
    return <span><button type="button" className="rocket-reserve">Reserved</button></span>;
  }
  return <span />;
};
const Rocket = (props) => {
  const { rocket } = props;

  const {
    id, rocketName, description, flickrImages, reserved,
  } = rocket;

  const dispatch = useDispatch();

  const reserveUpdate = () => {
    dispatch(reserveRocket({
      id,
    }));
  };

  const cancelReservation = () => {
    dispatch(cancelRocket({
      id,
    }));
  };

  return (
    <div className="rocket-container">
      <Card style={styles[0]}>
        <Card.Body style={{ flex: '0' }}>
          <img className="rocket-img" src={flickrImages} alt="planet" />
        </Card.Body>
        <Card.Body className="rocket-info">
          <Card.Title>{rocketName}</Card.Title>
          <Card.Text>
            <ReserveBadge reserved={reserved} />
            { ' '}
            {description}
          </Card.Text>
          <ReserveButton
            reserved={reserved}
            reserveRocket={reserveUpdate}
            cancelRocket={cancelReservation}
          />
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
