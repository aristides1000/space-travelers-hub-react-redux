/* eslint-disable react/prop-types */
import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission } from '../redux/mission/mission';

const Mission = (props) => {
  const { mission } = props;
  const dispatch = useDispatch();
  const reservationChange = (id) => {
    dispatch(reserveMission({ id }));
  };
  return (
    <tr id={mission.id}>
      <th scope="row">{mission.mission_name}</th>
      <td>{mission.description}</td>
      <td>
        <p className={
            mission.reserved ? 'not-a-menber yes-menber' : 'not-a-menber'
          }
        >
          {mission.reserved ? 'Active Menber' : 'NOT MENBER'}
        </p>
      </td>
      <td>
        <button
          onClick={() => reservationChange(mission.id)}
          type="button"
          className={
            mission.reserved ? 'join-mission leave-mission' : 'join-mission'
          }
        >
          {
            mission.reserved ? 'Leave Mission' : 'Join Mission'
          }
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: Proptypes.shape({
    mission_name: Proptypes.string,
    reserved: Proptypes.bool,
    description: Proptypes.string,
    mission_id: Proptypes.number,
  }).isRequired,
};
export default Mission;
