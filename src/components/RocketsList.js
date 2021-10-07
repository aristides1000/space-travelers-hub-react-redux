import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import Rocket from './Rocket';

const RocketsList = () => {
  const allRockets = useSelector((state) => state.rockets.rockets);
  const rocketsStatus = useSelector((state) => state.rockets.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rocketsStatus === false) {
      dispatch(fetchRockets());
    }
  }, []);

  const updateRockets = allRockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />);

  return (
    <div>{updateRockets}</div>
  );
};

export default RocketsList;
