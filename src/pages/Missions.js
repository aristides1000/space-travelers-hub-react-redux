/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import '../css/missions.css';
import { useDispatch } from 'react-redux';
import Mission from '../components/mission';
import { getMissions, getMissionsFromApi } from '../redux/mission/mission';

const Missions = ({ store }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (store.length === 0) {
      getMissionsFromApi(dispatch, getMissions);
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 pt-2 mx-auto">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th scope="col">Mission</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">
                  <span className="d-none">.</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {store.map((mission) => (
                <Mission key={`${mission.id}m`} mission={mission} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Missions;
